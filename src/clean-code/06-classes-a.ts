
(() => {




    type Gender = "M" | "F";

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }
    class Person {
        public name  : string;
        public gender:Gender;
        public birthDate: Date;
        constructor({ name,gender,birthDate }: PersonProps) {
            this.name = name;
            this.gender =gender;
            this.birthDate = birthDate;
         }
    }

    interface UserProps extends PersonProps {
        email: string;
        role: string;
        lastAccess: Date;
    }
    class User extends Person {

        public email: string;
        public role: string;
        private lastAccess: Date;
        constructor( userProps:UserProps) {                        
            super(userProps);
            this.email = userProps.email;
            this.role = userProps.role;
            this.lastAccess = userProps.lastAccess;            
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProps extends UserProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor( userSettingsProps:UserSettingsProps) {            
            super(userSettingsProps);
            this.workingDirectory = userSettingsProps.workingDirectory;
            this.lastOpenFolder = userSettingsProps.lastOpenFolder;
        }

    }


    


    const userSettings = new UserSettings({
        name: 'Fernando',
        gender: 'M',
        birthDate: new Date('1990-01-01'),
        email: 'tonovarela@live.com',
        role: 'Admin',
        lastAccess: new Date('2023-10-01'),
        workingDirectory: '/home/tonovarela',
        lastOpenFolder: '/home/tonovarela/last-open-folder'        
    });

    console.log({ userSettings });




})();




