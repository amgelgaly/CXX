import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const AccountBalance = () => {
  return (
    <Card className="border-none shadow-none bg-white rounded-lg p-6">
          <CardContent className="space-y-4">
            <CardTitle className="text-lg font-semibold">رصيد الحساب</CardTitle>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">الرصيد الحالي</div>
              <div className="font-semibold text-lg">100 ر.س</div>
            </div>
            <Button className="w-full mt-4">شحن الرصيد</Button>
          </CardContent>
        </Card>
  );
};

export default AccountBalance;