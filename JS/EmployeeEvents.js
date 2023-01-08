//Day46-UC2-On Document Load Set Event Listeners
window.addEventListener('DOMContentLoaded',(event)=>
{
    const name=document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        if(name.value.length==0)
        {
            textError.textContent="";
            return;
        }
        try
        {
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }
        catch(e)
        {
            textError.textContent=e;
        }
    });
    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function()
    {
        output.textContent=salary.value;
    });
});
//Day46-UC3 - On clicking on Submit button -> dialog box should appear representing employee data .
const save = () => 
{
    try
    {
        let employeePayrollData = createEmployeePayroll();  //UC3 Getting all data from from into a single object .
        createAndUpdateStorage(employeePayrollData);  //UC4 emp data Storing into cache
        // alert("");       //In order to get normal alert without any msg ~ Suraj Sir.
    }catch(e)
    {
        console.log(e);     //displaying error on console
        // return;
    }
}
const createEmployeePayroll=()=>
{
    let employeePayrollData =new EmployeePayrollData();
    try
    {
        employeePayrollData.name=getInputValueById('#name');
    }
    catch(e)
    {
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date =getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.startDate=new Date(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue) =>
{
    let allItems =document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item =>
        {
            if(item.checked)
                selItems.push(item.value);
        });
    return selItems;
}
const setTextValue=(id,value)=>
{
    const element= document.querySelector(id);
    element.textContent=value;
}
const getInputValueById=(id)=>
{
    let value=document.querySelector(id).value;
    return value;
}


//UC4 emp data Storing into local storage
//created a function to fetch list of employee payroll data and store it in Localstorage.
function createAndUpdateStorage(employeePayrollData)
{
    let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList !=undefined)
    {
        employeePayrollList.push(employeePayrollData);
    }
    else
    {
        employeePayrollList=[employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

//UC Ability to reset the form when clicked on reset button
const resetForm =()=>{
    setValue('#name',"");
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#note','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2023');
    alert("reset done");
}

const setValue=(id,value)=>
{
    const element = document.querySelector(id);
    element.value=value;
}
const unsetSelectedValues=(propertyValue)=>{
    let allItems=document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{item.checked=false;});
    
}
