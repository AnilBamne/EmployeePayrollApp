/*uc4: Ability to view Employee Payroll details
in a Tabular Format from JS File using
Template Literals. - Use Template literal ES6 */
//uc5 : Display employee payroll data from JSON object
//uc6 : Display employee payroll data from Local Storage
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => { 
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml(); 
    localStorage.removeItem('editEmp');
});
//uc6
const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList')? JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

//Template literal ES6  using json
const createInnerHtml=()=>
{
    const headerHtml= "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(empPayrollList.length==0) 
    {
        return;
    }
    let innerHtml=`${headerHtml}`;
    for(const empPayrollData of empPayrollList)
    {
        innerHtml=`${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt="" ></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img id="delete" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="update" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}
// uc5
//employee details in JSON format
const createEmployeePayrollJSON=()=>
{
    let empPayrollListLocal=[
        {
            _name:'Narayan M',
            _gender:'male',
            _department:['Engineering','Finance'],
            _salary:'500000',
            _startDate:'29 Oct 2019',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -2.png'
        },
        {
            _name:'Tamannah Bhatiya',
            _gender:'female',
            _department:['sales'],
            _salary:'400000',
            _startDate:'29 Oct 2019',
            _note:'',
            _id: new Date().getTime()+1,
            _profilePic:'../assets/profile-images/Ellipse -1.png'
        },
        {
            _name:'Aneesh K',
            _gender:'male',
            _department:['Engineer'],
            _salary:'430000',
            _startDate:'29 Oct 2020',
            _note:'',
            _id: new Date().getTime()+1,
            _profilePic:'../assets/profile-images/Ellipse -5.png'
        },
        {
            _name:'Aneesh K',
            _gender:'male',
            _department:['Engineer'],
            _salary:'430000',
            _startDate:'29 Oct 2020',
            _note:'',
            _id: new Date().getTime()+1,
            _profilePic:'../assets/profile-images/Ellipse -5.png'
        }
    ];
    return empPayrollListLocal;
}

//gets list of departmenrts of employee
const getDeptHtml=(deptList)=>
{
    let deptHtml='';
    for(const dept of deptList)
    {
        deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}