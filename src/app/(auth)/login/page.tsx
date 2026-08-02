"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/auth";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/dashboard");
    } catch (err) {
      alert("Email atau Password salah");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center p-6">

      <Card className="w-full max-w-md rounded-2xl shadow-2xl">

        <CardContent className="p-8">

          <div className="flex flex-col items-center">

            <img
              src="/logo-man.png"
              alt="Logo MAN"
              className="w-24 mb-4"
            />

            <h1 className="text-3xl font-bold text-green-700">
              SIPRESENSI MAN
            </h1>

            <p className="text-gray-500 text-center">
              MAN Kota Lhokseumawe
            </p>

            <p className="text-sm text-gray-400 mt-2 mb-8">
              Sistem Presensi Guru & Tenaga Kependidikan
            </p>

          </div>

          <div className="space-y-5">

            <div>

              <Label>Email</Label>

              <Input
                type="email"
                placeholder="email@madrasah.sch.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div>

              <Label>Password</Label>

              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-800"
            >
              {loading ? "Masuk..." : "Masuk ke Sistem"}
            </Button>

          </div>

          <div className="mt-8 text-center text-xs text-gray-500">

            © 2026 MAN Kota Lhokseumawe

          </div>

        </CardContent>

      </Card>

    </main>
  );
}