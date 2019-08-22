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

Things to do better : 

- IsLogged : request to API if token exist (instead of checking localstorage.access_token)
- possibility to create real users and the super-admin can switch someone to admin (then add "role")
