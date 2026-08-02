export interface UserProfile {
  uid: string;
  nama: string;
  email: string;
  role: "admin" | "user";
  nip: string;
  jabatan: string;
  phone: string;
  isActive: boolean;
}