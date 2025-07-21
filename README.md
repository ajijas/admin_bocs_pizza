# BOCS Pizza Admin Panel

This is the admin panel for BOCS Pizza ordering system with enhanced table booking (dine-in) functionality.

## 🍕 Features

### Core Features
- **Restaurant Management**: Complete restaurant administration system
- **Order Management**: Handle delivery, takeaway, and dine-in orders
- **Product Management**: Manage menu items, categories, and pricing
- **Branch Management**: Multi-branch support with individual settings
- **Customer Management**: Customer profiles and order history
- **Delivery Management**: Delivery personnel and route management
- **POS System**: Point of sale for in-store orders
- **Reports & Analytics**: Comprehensive business reporting

### 🆕 New Table Booking (Dine-In) Feature
- **Table Management**: Create and manage restaurant tables
- **Table Booking**: Accept table reservations from mobile app
- **Dine-In Orders**: Process orders for customers dining in
- **Table Status**: Real-time table availability tracking
- **Integration**: Seamless integration with existing POS system

## 🚀 Recent Updates

### Table Booking Implementation
- Added `dine_in` business setting for enabling/disabling table bookings
- Enhanced order placement API to handle table information
- Updated configuration API to include dine-in availability
- Added table availability API for mobile app integration
- Automatic table order creation for dine-in orders
- Enhanced admin panel with dine-in order management

### API Enhancements
- **New Endpoint**: `/api/v1/tables/available` - Get available tables for mobile app
- **Enhanced**: `/api/v1/config` - Now includes dine-in configuration
- **Enhanced**: `/api/v1/customer/order/place` - Supports table booking data

### Database Updates
- Orders table now stores `table_id` and `number_of_people` for dine-in orders
- Automatic creation of `table_orders` entries for table bookings
- Full integration with existing table management system

## 🛠️ Installation

1. Clone the repository
2. Install dependencies: `composer install`
3. Configure environment: Copy `.env.example` to `.env`
4. Set up database configuration
5. Run migrations: `php artisan migrate`
6. Seed database: `php artisan db:seed`
7. Configure web server to point to `public` directory

## 📱 Mobile App Integration

This admin panel works seamlessly with the BOCS Pizza mobile app, providing:
- Table booking functionality
- Real-time table availability
- Dine-in order processing
- Integrated POS system

## 🔧 Configuration

### Enable Table Booking
1. Go to **Business Settings** > **Restaurant Setup**
2. Enable the **Dine In** option
3. Configure your restaurant tables in **Table Management**
4. The mobile app will automatically show table booking options

## 📊 System Requirements

- PHP 8.0+
- MySQL 5.7+
- Laravel 9.x
- Composer
- Web server (Apache/Nginx)

## 🤝 Support

For technical support and feature requests, please contact the development team.

---

**BOCS Pizza Admin Panel** - Comprehensive restaurant management with advanced table booking capabilities.

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[British Software Development](https://www.britishsoftware.co)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- [UserInsights](https://userinsights.com)
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)
- [Invoice Ninja](https://www.invoiceninja.com)
- [iMi digital](https://www.imi-digital.de/)
- [Earthlink](https://www.earthlink.ro/)
- [Steadfast Collective](https://steadfastcollective.com/)
- [We Are The Robots Inc.](https://watr.mx/)
- [Understand.io](https://www.understand.io/)
- [Abdel Elrafa](https://abdelelrafa.com)
- [Hyper Host](https://hyper.host)
- [Appoly](https://www.appoly.co.uk)
- [OP.GG](https://op.gg)

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
