import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;


export const supabase = createClient(supabaseUrl, supabaseKey);


export const createApi = async ({ data, from = "bookings" }) => {
    const { error } = await supabase.from(from).insert(data);
    if (error) {
        throw error;
    }
    return true;
};

//bookingDate
export const getAllApi = async ({ from = "bookings", page = 1, pageSize = 10, orderDir = "desc", sort = "bookingDate" }) => {
    const { data, error, count } = await supabase
        .from(from)
        .select('*', { count: 'exact' })
        .range((page - 1) * pageSize, page * pageSize - 1)
        .order(sort, { ascending: orderDir === "asc" });

    if (error) {
        throw new Error(error.message);
    }

    return {
        data,
        totalCount: count
    };
};

export const updateApi = async ({ id, data,
    from = "bookings",
}) => {
    const { error } = await supabase.from(from).update(data).eq('id', id);
    if (error) {
        throw error;
    }
    return true;
};

export const deleteApi = async ({
    id,
    from = "bookings",
}) => {
    const { error } = await supabase.from(from).delete().eq('id', id);
    if (error) {
        throw error;
    }
    return true;
};

export const getApiById = async ({ id,
    from = "bookings",
}) => {
    const { data, error } = await supabase.from(from).select('*').eq('id', id).single();
    if (error) {
        throw error;
    }
    return data;
};