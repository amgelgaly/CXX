import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User as AuthUser, AuthContextType } from "@/contexts/AuthContext";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import PageHeader from "@/components/layout/PageHeader";
import AccountBalance from "@/components/auth/AccountBalance";
import ProfileInfo from "@/components/auth/ProfileInfo";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth() as AuthContextType;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
          <div className="pt-20 w-full max-w-screen-lg px-6">
            <PageHeader
              title="الملف الشخصي"
              subtitle="إدارة معلومات حسابك الشخصي"
            />
          </div>
    
          <div className="container mx-auto px-4 py-8 max-w-screen-lg">
            <div className="max-w-2xl mx-auto w-full">
              <ProfileInfo user={user} />
              <div className="mt-8">
                <AccountBalance />
              </div>
            </div>
          </div>
        </div>
  );
};

export default Profile;
