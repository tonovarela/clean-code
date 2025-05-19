(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        //birthdate: Date;
        email: string;
        //gender: Gender;
        //name: string;
        role: string;
    }

    class User {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({ email, role }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        name: string;
        gender: Gender;
        birthdate: Date;
        email: string;
        role: string;
        workingDirectory: string;
        lastOpenFolder: string;

    }


    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({ name,
            gender,
            birthdate,
            email,
            role,
            workingDirectory,
            lastOpenFolder }: UserSettingsProps) {
            this.user = new User({ email, role });
            this.person = new Person({ name, gender, birthdate });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }
    }


    const userSettings = new UserSettings({
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1990-01-01'),
        email: 't@live.com',
        role: 'Admin',
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
    });

    console.log({ userSettings });


})();