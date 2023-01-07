// day 46 uc1 - Adding getter and setters
class EmployeePayrollData
{
    //getter and setter methods
    get id()
    {
        return this._id;
    }
    set id(id)
    {
        this._id=id;
    }

    get name()
    {
        return this._name;
    }
    set name(name)
    {
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))
        {
            this._name=name;
        }
        else
        {
            throw "Invalid name"
        }
    }

    get profilepic()
    {
        return this._profilepic;
    }
    set profilepic(profilepic)
    {
        this._profilepic=profilepic;
    }

    get gender()
    {
        return this._gender;
    }
    set gender(gender)
    {
        this._gender=gender;
    }

    get department()
    {
        return this._department;
    }
    set gender(department)
    {
        this._department=department;
    }

    get salary()
    {
        return this._salary;
    }
    set salary(salary)
    {
        this._saary=salary;
    }

    get note()
    {
        return this._note;
    }
    set note(note)
    {
        this._note=note;
    }

    set start_date(start_date) 
    {
        if (startDate <= new Date())        //checking for future date
        {
            this._startDate = startDate;
        }
        else 
        {
            throw 'Date can not be of future';
        }
    }


    toString() 
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" :
            this.start_date.toLocaleDateString("en-US", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " + this.profilePic
            + ", Department = " + this.department + ", Salary = " + this.salary +
            ", StartDate = " + empDate + ", Note = " + this.note;
    }
}