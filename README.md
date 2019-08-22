# fourthmedia

after git clone :
- react : npm install
- symfony : composer install

Create an empty file data.db in src/var

execute : 
- php bin/console doctrine:schema:create
- php bin/console fos:user:create root      // with root as a wordpass
(or create any user you want but you need to connect with on react after)

And i guess you can start to use the app !
