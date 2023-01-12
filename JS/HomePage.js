/* Ability to view Employee Payroll details
in a Tabular Format from JS File using
Template Literals. - Use Template literal ES6 */

window.addEventListener('DOMContentLoaded', (event) => { createInnerHtml(); });

//Template literal ES6  (code to be wrritten in -> ``; )  way-1

// const createInnerHtml = () => {
//     const innerHtml = `             
//         <tr>
//             <th></th>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Department</th>
//             <th>Salary</th>
//             <th>Start Date</th>
//             <th>Actions</th>
//         </tr>
//         <tr>
//             <td ><img class="profile"  src="../Assets/profile-images/Ellipse -2.png"></td>
//             <td>Girish</td>
//             <td>Male</td>
//             <td>
//                 <div class="dept-label">Engineer</div>
//                 <div class="dept-label">Finance</div></td>
//             <td>450000</td>
//             <td> 1 Mar 2023</td>
//             <td>
//                 <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
//                 <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
//             </td>
//         </tr>
//         <tr>
//             <td ><img class="profile"  src="../Assets/profile-images/Ellipse -1.png"></td>
//             <td>Aneeta</td>
//             <td>Female</td>
//             <td>
//                 <div class="dept-label">HR</div>
//                 <div class="dept-label">Finance</div></td>
//             <td>400000</td>
//             <td> 3 Jan 2021</td>
//             <td>
//                 <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
//                 <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
//             </td>
//         </tr>
//             <tr>
//             <td ><img class="profile"  src="../Assets/profile-images/Ellipse -3.png"></td>
//             <td>Kapil</td>
//             <td>Male</td>
//             <td>
//                 <div class="dept-label">Sales</div>
//             <td>380000</td>
//             <td> 1 Aug 2020</td>
//             <td>
//                 <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
//                 <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
//             </td>
//         </tr>
//         <tr>
//             <td ><img class="profile"  src="../Assets/profile-images/Ellipse -7.png"></td>
//             <td>Geetha</td>
//             <td>Female</td>
//             <td>
//                 <div class="dept-label">Engineer</div>
//                 <div class="dept-label">Finance</div></td>
//             <td>410000</td>
//             <td> 7 Jan 2023</td>
//             <td>
//                 <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
//                 <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
//             </td>
//         </tr>
//             <tr>
//             <td ><img class="profile"  src="../Assets/profile-images/Ellipse -1.png"></td>
//             <td>Anushka</td>
//             <td>Female</td>
//             <td>
//                 <div class="dept-label">HR</div>
//                 <div class="dept-label">Sales</div></td>
//             <td>400000</td>
//             <td> 3 Jan 2021</td>
//             <td>
//                 <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
//                 <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
//             </td>
//         </tr>
//             <tr>
//             <td ><img class="profile"  src="../Assets/profile-images/Ellipse -3.png"></td>
//             <td>Krishna</td>
//             <td>Male</td>
//             <td>
//                 <div class="dept-label">Sales</div>
//                 <div class="dept-label">Other</div>
//             <td>380000</td>
//             <td> 1 Aug 2020</td>
//             <td>
//                 <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
//                 <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
//             </td>
//         </tr>
//         `;
//         document.querySelector('#table-display').innerHTML=innerHtml;
// }

//Template literal ES6  (code to be wrritten in -> ``; ) 1) way-2
function createInnerHtml()
{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}
        <tr>
            <td ><img class="profile"  src="../Assets/profile-images/Ellipse -2.png"></td>
            <td>Girish</td>
            <td>Male</td>
            <td>
                <div class="dept-label">Engineer</div>
                <div class="dept-label">Finance</div></td>
            <td>450000</td>
            <td> 1 Mar 2023</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        <tr>
            <td ><img class="profile"  src="../Assets/profile-images/Ellipse -1.png"></td>
            <td>Aneeta</td>
            <td>Female</td>
            <td>
                <div class="dept-label">HR</div>
                <div class="dept-label">Finance</div></td>
            <td>400000</td>
            <td> 3 Jan 2021</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
            <tr>
            <td ><img class="profile"  src="../Assets/profile-images/Ellipse -3.png"></td>
            <td>Kapil</td>
            <td>Male</td>
            <td>
                <div class="dept-label">Sales</div>
            <td>380000</td>
            <td> 1 Aug 2020</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        <tr>
            <td ><img class="profile"  src="../Assets/profile-images/Ellipse -7.png"></td>
            <td>Geetha</td>
            <td>Female</td>
            <td>
                <div class="dept-label">Engineer</div>
                <div class="dept-label">Finance</div></td>
            <td>410000</td>
            <td> 7 Jan 2023</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
            <tr>
            <td ><img class="profile"  src="../Assets/profile-images/Ellipse -1.png"></td>
            <td>Anushka</td>
            <td>Female</td>
            <td>
                <div class="dept-label">HR</div>
                <div class="dept-label">Sales</div></td>
            <td>400000</td>
            <td> 3 Jan 2021</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
            <tr>
            <td ><img class="profile"  src="../Assets/profile-images/Ellipse -3.png"></td>
            <td>Krishna</td>
            <td>Male</td>
            <td>
                <div class="dept-label">Sales</div>
                <div class="dept-label">Other</div>
            <td>380000</td>
            <td> 1 Aug 2020</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML=innerHtml;
}