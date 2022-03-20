namespace core
{

    export class Contact 
    {
        // private instance members
        private m_fullName: string;
        private m_contactNumber: string;
        private m_emailAddress: string;


        // public properties (accessors / mutators)
        public get FullName(): string
        {
            return this.m_fullName;
        }
        public set FullName(fullName: string)
        {
            this.m_fullName = fullName;
        }
    
        public get ContactNumber(): string
        {
            return this.m_contactNumber;
        }
        public set ContactNumber(contactNumber: string)
        {
            this.m_contactNumber = contactNumber;
        }
    
        public get EmailAddress(): string
        {
            return this.m_emailAddress;
        }
        public set EmailAddress(emailAddress: string)
        {
            this.m_emailAddress = emailAddress;
        }
    
        // constructor
        constructor(fullname: string = "", contactNumber: string = "", emailAddress: string = "")  // default string parameter
        {
            this.m_fullName = fullname;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }
    
        // public methods
        /**
         * This method concerts the object's properties to a comma seperated strings.
         * 
         * @returns {(string | null)}
         */
        serialize(): string | null
        {
            if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
            {
                return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            console.error("One or more properties of the contact object are missing or empty");
            return null;
            
        }
    
        /**
         * Seperates the data string into the objects's properties
         * 
         * @param {string}data 
         * @returns {void}
         */
        deserialize(data: string): void // assume that the data object is comma-seperated list of properties
        {
            let propertyArray: string[] = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
    
        // overridden methods
        /**
         * This method overrides builtin to string method, and returns a string that contains the values of
         * the object's properties
         * 
         * @override
         * @returns {string}
         */
        toString(): string
        {
            return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }
    }

}

