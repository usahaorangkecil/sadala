
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await login(email, password);
      
      if (success) {
        // Redirect based on user role
        if (email === "pemkab@admin.com") {
          navigate("/admin/pemkab");
        } else if (email === "opd@admin.com") {
          navigate("/admin/opd");
        } else if (email === "validator@admin.com") {
          navigate("/admin/validator");
        } else if (email === "editor@admin.com") {
          navigate("/admin/editor");
        } else if (email === "user@admin.com") {
          navigate("/admin/user");
        }
      } else {
        setError("Email atau password tidak valid.");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
      console.error(err);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/323b466a-00c8-4cae-ae5d-8c00d89f1996.png" 
            alt="SADALA Logo" 
            className="h-20 mx-auto mb-4" 
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                      Lupa password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Login"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Akses portal ini khusus untuk pengelola data Kabupaten Lamongan
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
