import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://dwhbaxhmzalirflywdon.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_A1kCB-eF5d8tPjlzfxuwwA_8a_fbVK1';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);