import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "رقم الهاتف",
      info: "+966 50 000 0000",
      link: "tel:+966500000000",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "البريد الإلكتروني",
      info: "info@example.com",
      link: "mailto:info@example.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "العنوان",
      info: "الرياض، المملكة العربية السعودية",
      link: "https://maps.google.com/?q=Riyadh,Saudi+Arabia",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "ساعات العمل",
      info: "الأحد - الخميس: 9 صباحاً - 5 مساءً",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">معلومات التواصل</h2>
      {contactDetails.map((item, index) => (
        <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              {item.icon}
            </div>
            <div>
              <h3 className="font-medium mb-1">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {item.info}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{item.info}</p>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
