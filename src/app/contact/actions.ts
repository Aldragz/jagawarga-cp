'use server';

import { supabase } from "../../lib/supabase";

export async function sendContact(formData: FormData) {
  const name = formData.get('name');
  const message = formData.get('message');

  const { error } = await supabase
    .from('Kontak')
    .insert([{ name, message }]);

  if (error) {
    return { success: false, message: "Gagal mengirim pesan." };
  }

  return { success: true, message: "Pesan berhasil terkirim!" };
}