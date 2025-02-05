import { User as IconUser, Mail as IconMail, Calendar as IconCalendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileInfoProps {
  user: {
    name: string;
    email: string;
    joinDate: string;
  };
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  return (
    <Card className="border-none shadow-none bg-white rounded-lg p-6">
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <IconUser className="w-6 h-6 text-gray-500" />
              <div className="space-y-1">
                <div className="text-sm text-gray-500">الاسم</div>
                <div className="font-semibold text-lg">{user.name}</div>
              </div>
            </div>
    
            <div className="flex items-center gap-4">
              <IconMail className="w-6 h-6 text-gray-500" />
              <div className="space-y-1">
                <div className="text-sm text-gray-500">البريد الإلكتروني</div>
                <div className="font-semibold text-lg">{user.email}</div>
              </div>
            </div>
    
            <div className="flex items-center gap-4">
              <IconCalendar className="w-6 h-6 text-gray-500" />
              <div className="space-y-1">
                <div className="text-sm text-gray-500">تاريخ الانضمام</div>
                <div className="font-semibold text-lg">{new Date(user.joinDate).toLocaleDateString('ar-SA')}</div>
              </div>
            </div>
          </CardContent>
        </Card>
  );
};

export default ProfileInfo;