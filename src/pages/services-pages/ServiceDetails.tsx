import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';

// Dummy service data (replace with actual data fetching later)
const serviceData = {
  '1': {
    name: 'خدمة تصميم المواقع',
    description: 'نقدم خدمة تصميم مواقع احترافية وعصرية تلبي احتياجات عملك وتساعدك على النمو.',
    features: [
      'تصميم متجاوب بالكامل',
      'تحسين محركات البحث (SEO)',
      'دعم فني على مدار الساعة',
      'تصميم فريد وجذاب',
    ],
    price: 'تبدأ من 500$',
  },
  '2': {
    name: 'خدمة التسويق الرقمي',
    description: 'نساعدك في الوصول إلى جمهورك المستهدف وزيادة مبيعاتك من خلال استراتيجيات التسويق الرقمي الفعالة.',
    features: [
      'إعلانات جوجل',
      'التسويق عبر وسائل التواصل الاجتماعي',
      'التسويق بالمحتوى',
      'تحليل وتقارير الأداء',
    ],
    price: 'تختلف حسب الباقة',
  },
};

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = serviceData[id] || { name: 'Service Not Found', description: '', features: [], price: '' }; // Fallback

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        {/* User provided component starts */}
        <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="17" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%20py-4%20flex%20justify-between%20items-center%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="19" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22flex%20items-center%20space-x-4%20rtl%3Aspace-x-reverse%22%7D" className="flex items-center space-x-4 rtl:space-x-reverse">
            <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="20" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22flex%20items-center%20rtl%3Aspace-x-reverse%22%7D" className="flex items-center rtl:space-x-reverse">
              <span data-component-path="src\components\layout\PageHeader.tsx" data-component-name="span" data-component-line="21" data-component-file="PageHeader.tsx" data-component-content="%7B%22text%22%3A%22%D9%81%D8%B1%D9%88%D8%B1%D9%88%D8%B1%22%2C%22className%22%3A%22font-bold%20text-gray-900%20text-lg%20rtl%3Amr-2%22%7D" className="font-bold text-gray-900 text-lg rtl:mr-2">فرورور</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star text-gray-500 h-5 w-5 rtl:mr-1" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="Star" data-component-line="22" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22text-gray-500%20h-5%20w-5%20rtl%3Amr-1%22%7D"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users text-gray-500 h-5 w-5 rtl:mr-1" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="Users" data-component-line="23" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22text-gray-500%20h-5%20w-5%20rtl%3Amr-1%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="25" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22flex%20items-center%20space-x-2%20rtl%3Aspace-x-reverse%22%7D" className="flex items-center space-x-2 rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye text-gray-500 h-4 w-4" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="Eye" data-component-line="26" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22text-gray-500%20h-4%20w-4%22%7D"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span data-component-path="src\components\layout\PageHeader.tsx" data-component-name="span" data-component-line="27" data-component-file="PageHeader.tsx" data-component-content="%7B%22text%22%3A%22Workspace%20visible%22%2C%22className%22%3A%22text-sm%20text-gray-700%22%7D" className="text-sm text-gray-700">Workspace visible</span>
            </div>
          </div>
          <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="32" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22relative%20inline-block%20text-left%22%7D" className="relative inline-block text-left">
            <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="33" data-component-file="PageHeader.tsx" data-component-content="%7B%7D">
              <button data-component-path="src\components\layout\PageHeader.tsx" data-component-name="button" data-component-line="34" data-component-file="PageHeader.tsx" data-component-content="%7B%22text%22%3A%22Board%22%2C%22className%22%3A%22inline-flex%20justify-center%20w-full%20rounded-md%20border%20border-gray-300%20shadow-sm%20px-4%20py-2%20bg-white%20text-sm%20font-medium%20text-gray-700%20hover%3Abg-gray-50%20focus%3Aoutline-none%20focus%3Aring-2%20focus%3Aring-offset-2%20focus%3Aring-indigo-500%22%7D" type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">Board<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down -mr-1 ml-2 h-5 w-5" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="ChevronDown" data-component-line="36" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22-mr-1%20ml-2%20h-5%20w-5%22%7D" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>
            </div>
          </div>
          <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="42" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22flex%20items-center%20space-x-4%20rtl%3Aspace-x-reverse%22%7D" className="flex items-center space-x-4 rtl:space-x-reverse">
            <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="43" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22flex%20items-center%20space-x-2%20rtl%3Aspace-x-reverse%22%7D" className="flex items-center space-x-2 rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap text-gray-500 h-4 w-4" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="Zap" data-component-line="44" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22text-gray-500%20h-4%20w-4%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              <span data-component-path="src\components\layout\PageHeader.tsx" data-component-name="span" data-component-line="45" data-component-file="PageHeader.tsx" data-component-content="%7B%22text%22%3A%22Power-Ups%22%2C%22className%22%3A%22text-sm%20text-gray-700%22%7D" className="text-sm text-gray-700">Power-Ups</span>
            </div>
            <span data-component-path="src\components\layout\PageHeader.tsx" data-component-name="span" data-component-line="47" data-component-file="PageHeader.tsx" data-component-content="%7B%22text%22%3A%22Automation%22%2C%22className%22%3A%22text-sm%20text-gray-700%22%7D" className="text-sm text-gray-700">Automation</span>
            <div data-component-path="src\components\layout\PageHeader.tsx" data-component-name="div" data-component-line="48" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22flex%20items-center%20space-x-2%20rtl%3Aspace-x-reverse%22%7D" className="flex items-center space-x-2 rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-filter text-gray-500 h-4 w-4" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="Filter" data-component-line="49" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22text-gray-500%20h-4%20w-4%22%7D"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              <span data-component-path="src\components\layout\PageHeader.tsx" data-component-name="span" data-component-line="50" data-component-file="PageHeader.tsx" data-component-content="%7B%22text%22%3A%22Filters%22%2C%22className%22%3A%22text-sm%20text-gray-700%22%7D" className="text-sm text-gray-700">Filters</span>
            </div>
            <button data-component-path="src\components\layout\PageHeader.tsx" data-component-name="button" data-component-line="52" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22relative%20rounded-full%20flex-shrink-0%20h-8%20w-8%20bg-gray-500%20items-center%20justify-center%22%7D" className="relative rounded-full flex-shrink-0 h-8 w-8 bg-gray-500 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round h-5 w-5 text-white" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="User2" data-component-line="53" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
              <span data-component-path="src\components\layout\PageHeader.tsx" data-component-name="span" data-component-line="54" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22absolute%20top-0%20right-0%20block%20h-2%20w-2%20rounded-full%20bg-blue-500%20border-2%20border-white%22%7D" className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 border-2 border-white"></span>
            </button>
            <button data-component-path="src\components\layout\PageHeader.tsx" data-component-name="button" data-component-line="56" data-component-file="PageHeader.tsx" data-component-content="%7B%22text%22%3A%22Share%22%2C%22className%22%3A%22bg-blue-600%20hover%3Abg-blue-700%20text-white%20font-bold%20py-2%20px-4%20rounded%22%7D" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 h-4 w-4 inline-block rtl:mr-1" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="Share2" data-component-line="57" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20inline-block%20rtl%3Amr-1%22%7D"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>Share</button>
            <button data-component-path="src\components\layout\PageHeader.tsx" data-component-name="button" data-component-line="60" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22text-gray-500%20hover%3Atext-gray-700%22%7D" className="text-gray-500 hover:text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical h-5 w-5" data-component-path="src\components\layout\PageHeader.tsx" data-component-name="MoreVertical" data-component-line="61" data-component-file="PageHeader.tsx" data-component-content="%7B%22className%22%3A%22h-5%20w-5%22%7D"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
          </div>
        </div>
        {/* User provided component ends */}
      </div>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {service.name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  <DescriptionIcon sx={{ mr: 1, mb: -0.5 }} /> وصف الخدمة
                </Typography>
                <Typography variant="body1">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  <CheckCircleIcon sx={{ mr: 1, mb: -0.5 }} /> الميزات
                </Typography>
                <List>
                  {service.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  <AttachMoneyIcon sx={{ mr: 1, mb: -0.5 }} /> السعر
                </Typography>
                <Typography variant="body1">
                  {service.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary">
              اطلب الخدمة الآن
            </Button>
          </Grid>
          <Grid item xs={12} style={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="body1" align="center" >
              Service ID: {id}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ServiceDetails;
