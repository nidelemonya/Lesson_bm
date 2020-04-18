// console.log('hello member')
var members = [
    {
        id: 1314,
        name: '廖子文',
        sex: '男',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=2919831077,1230952122&fm=26&gp=0.jpg',
        phone_number: 48949846,
        home_town: '江西赣州'
    },
    {
        id: 520,
        name: '衷从海',
        sex: '男',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=256403268,3382634758&fm=26&gp=0.jpg',
        phone_number: 48949846,
        home_town: '江西赣州'
    },
    {
        id: 343138,
        name: '周子寒',
        sex: '男',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=2484602611,2998174117&fm=26&gp=0.jpg',
        phone_number: 48949846,
        home_town: '江西赣州'
    },
    {
        id: 1918,
        name: '傅闯',
        sex: '男',
        avatar: 'http://img0.imgtn.bdimg.com/it/u=4150802370,1902002068&fm=11&gp=0.jpg',
        phone_number: 48949846,
        home_town: '江西赣州'
    }
];
var form = document.forms.myform;
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var id = form.idInput.value;
    var name = form.nameInput.value;
    var sex = form.sexInput.value;
    var avatar = form.avatarInput.value;
    var phone_number = parseInt(form.phone_numberInput.value);
    var home_town = form.home_townInput.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    var ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        sex: sex,
        avatar: avatar,
        phone_number: phone_number,
        home_town: home_town
    });
    console.log(members);
    render();
});
var tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
// console.log(members)
function render() {
    tbody.innerHTML = members
        .map(function (member) {
        return "\n        <tr>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td>" + member.sex + "</td>\n            <td><div class=\"imgbox\"><img src=" + member.avatar + "></div></td>\n            <td>" + member.phone_number + "</td>\n            <td>" + member.home_town + "</td>\n        </tr>\n        ";
    }).join(" ");
}
render();
