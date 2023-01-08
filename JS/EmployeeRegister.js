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
    set department(department)
    {
        this._department=department;
    }

    get salary()
    {
        return this._salary;
    }
    set salary(salary)
    {
        this._salary=salary;
    }

    get note()
    {
        return this._note;
    }
    set note(note)
    {
        this._note=note;
    }

    get startDate()
    {
        return this._startDate;
    }
    set startDate(startDate)
    {
        this._startDate=startDate;
    }


    toString() 
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" :
            this.start_date.toLocaleDateString("en-GB", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " + this.profilePic
            + ", Department = " + this.department + ", Salary = " + this.salary +
            ", StartDate = " + this.startDate + ", Note = " + this.note;
    }
}