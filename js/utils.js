/**
 * Created by Administrator on 2018/1/21.
 */

/*将带问号的查询字符串search格式化为json*/
$.formatSearch = function (searchString) {
    var res = decodeURIComponent(searchString.substring(1,searchString.length));
    if(res.substring(res.length-1,res.length) == '&'){
        res = res.substring(0,res.length-1);
    }
    res = res.replace(/(\w+)=([a-zA-Z0-9\u4e00-\u9fa5]+)/g,'\"$1\":\"$2\"');
    var pattern = '';
    if(/&amps;/.test(res)){
        pattern = /&amps;/g;
    }else{
        pattern = /&/g;
    }
    res = res.replace(pattern,',');
    return JSON.parse('{'+res+'}');
};
$.GetFirstPreMonDate=function getPreMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {//如果是1月份，则取上一年的12月份
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {//如果原来日期大于上一月的日期，则取当月的最大日期。比如3月的30日，在2月中没有30
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;//月份填补成2位。
    }
    var t2 = year2 + '-' + month2 + '-' + '01';
    return t2;
}


$.GetLastPreMonDate = function(AddDayCount,flag){
    var status = flag == null ? false:true;
    var res = null;
    var date = new Date();
    var day = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    var dd = new Date(new Date().getFullYear(), new Date().getMonth()-1, day);
    dd.setDate(dd.getDate());//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = 1;
    if(m<10){
        m = '0' + m;
    }
    if(d<10){
        d='0' + d;
    }
    res = y+m+d;
    if(status == true){
        res = y + '-' + m+"-"+d;
    }
    if(status == false) {
        res = m+"-"+d;
    }
    return res;
}
$.GetFirstDate = function(AddDayCount,flag){
    var status = flag == null ? false:true;
    var res = null;
    var dd = new Date();
    dd.setDate(dd.getDate());//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = 1;
    if(m<10){
        m = '0' + m;
    }
    if(d<10){
        d='0' + d;
    }
    res = y+m+d;
    if(status == true){
        res = y + '-' + m+"-"+d;
    }
    if(status == false) {
        res = m+"-"+d;
    }
    return res;
}
/*获取昨天日期*/
$.GetDateStr = function (AddDayCount,flag) {
    var status = flag == null ? false:true;
    var res = null;
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    if(m<10){
        m = '0' + m;
    }
    if(d<10){
        d='0' + d;
    }
    res = y+m+d;
    if(status == true){
        res = y + '-' + m+"-"+d;
    }
    if(status == false) {
        res = m+"-"+d;
    }
    return res;
}
$.GetDateStrNew = function (AddDayCount,flag) {
    var status = flag == null ? false:true;
    console.log(status);
    var res = null;
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    if(m<10){
        m = '0' + m;
    }
    if(d<10){
        d='0' + d;
    }
    res = y+m+d;
    if(status == true){
        res = y + '' + m+""+d;
    }
    if(status == false) {
        res = m+""+d;
    }
    return Number(res);
}

$.GetDateStrSimple = function (AddDayCount,flag) {
    var status = flag == null ? false:true;
    // console.log(status);
    var res = null;
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    if(m<10){
        m = '0' + m;
    }
    if(d<10){
        d='0' + d;
    }
    res = y+m+d;
    if(status == true){
        res = y + '' + m+""+d;
    }
    if(status == false) {
        res = m+""+d;
    }
    return res;
}

/*过滤数组对象中某个字段的重复值并排序*/
$.FilterArrayObjectColumn =  function(data,column,index,length) {
    var temp = new Array();
    temp.push(data[0][column].substr(index,length));
    for(var i=0;i<data.length;i++){
        if(temp.indexOf(data[i][column].substr(index,length))=='-1'){
            temp.push(data[i][column].substr(index,length));
        }
    }
    return temp.sort();
}
$.sliceElemInArray = function (arr,index,length) {
    var temp = [];
    for(var i=0;i<arr.length;i++){
        temp.push(arr[i].substr(index,length))
    }
    return temp;
}

$.arrSortBy = function(attr,rev){
    //第二个参数没有传递 默认升序排列
    if(rev ==  undefined){
        rev = 1;
    }else{
        rev = (rev) ? 1 : -1;
    }

    return function(a,b){
        a = a[attr];
        b = b[attr];
        if(a < b){
            return rev * -1;
        }
        if(a > b){
            return rev * 1;
        }
        return 0;
    }
}

/*排序*/
$.sortJsonArrPercent = function (jsonArr,sortField,flag,isDesc) {
    function sort(a,b){
        return isDesc == true ? parseFloat(b[sortField])-parseFloat(a[sortField]) : parseFloat(a[sortField])-parseFloat(b[sortField]);
    }
    if(!flag){
        return jsonArr.sort(sort);
    }else{
        var total = [];
        var unshiftElem  = null;
        for(var i=0;i<jsonArr.length;i++){
            if(i==0){
                unshiftElem = jsonArr[i];
            }else if(i>0 && i<6){
                total.push(jsonArr[i]);
            }
        }
        total.sort(sort);
        total.unshift(unshiftElem);
        for(var i=6;i<jsonArr.length;i++){
            total.push(jsonArr[i]);
        }
        return total
    }
}
//按钮显示隐藏切换
$.btnShowHideToggle = function(data,level,offset){
    for(var j=level;j<data.length;j++){
        $(data[j]).hide();
    }
    var i=0;
    if(offset!=0){
        offset++;
        level++;
    }
    if(i<offset){
        i=offset;
    }
    for(;i<level;i++){
        $(data[i]).show();
    }
}

$.changeIntoSelectFormat = function (str) {
    if(/\./.test(str)|| /#/.test(str)){
        return　str
    }
    return /#/.test(str) ? str : '#'+str;
}
$.isMobileAvailable = function ($poneInput) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test($poneInput.val())) {
        return false;
    } else {
        return true;
    }
}
/*获取删除cooikie*/
$.delCookie=function (name) {
    console.log(name)
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=this.getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    console.log(document.cookie)
}
$.getCookie = function (name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

/*两个元素交替显示隐藏,需要显示的放在前面*/
$.toggleDisplay = function (elemOneId,elemTwoId) {
    $($.changeIntoSelectFormat(elemOneId)).show();
    $($.changeIntoSelectFormat(elemTwoId)).hide();
}
$.isIdCardNo = function (num) {
    num = num.toUpperCase();
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
        alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
        return false;
    }
    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    //下面分别分析出生日期和校验位
    var len, re;
    len = num.length;
    if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re);
        //检查生日日期是否正确
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2]))
            && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
            && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            alert('输入的身份证号里出生日期不对！');
            return false;
        } else {
            //将15位身份证转成18位
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return num;
        }
    }
    if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re);
        //检查生日日期是否正确
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2]))
            && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3]))
            && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            alert('输入的身份证号里出生日期不对！');
            return false;
        } else {
            //检验18位身份证的校验码是否正确。
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {
                alert('18位身份证的校验码不正确！');
                return false;
            }
            return num;
        }
    }
    return false;
}
$.isPoneAvailable= function (pone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(pone)) {
        return false;
    } else {
        return true;
    }
},
// 判断是否为电话号码
$.isTelAvailable= function (tel) {
    var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (!myreg.test(tel)) {
        return false;
    } else {
        return true;
    }
}
$.checkTel = function (value){
    var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    var isMob=/^((\+?86)|(\(\+86\)))?(13[0-9][0-9]{8}|16[0-9][0-9]{8}|15[0-9][0-9]{8}|17[0-9][0-9]{8}|18[0-9][0-9]{8}|19[0-9][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    console.log(isMob.test(value))
    console.log(isPhone.test(value))
    if(isMob.test(value)||isPhone.test(value)){
        return true;
    }
    else{
        alert("输入的手机或电话号码无效");
        return false;
    }
}
$.userNameVerify = function(name){
    var regName =/^[\u4e00-\u9fa5]{2,4}$/;
    if(!regName.test(name)){
        alert("姓名请输入2-4位汉字");
        return false;
    }
    return true;
}
$.userNameVerify = function(valJson){
    // console.log(valJson);
    for(var key in valJson){
        // console.log(valJson[key]);
        if (valJson[key] == null || valJson[key]  == undefined || valJson[key]  == '') {
            alert(key+"为空请填写");
            return false;
        }
    }
    return true;
}
$.conditionAnd = function (funcJson) {
    var flag = true;
    for(var key in funcJson){
        if(!key(funcJson[key])){
            flag = false
        }
    }
    return true;
}
$.mobileEncode = function(re){
    ze =re.substr(0,3)* 3 + '' + ((re.substr(3,8)*4));
    if(ze.length<12){
        var mid  = '';
        for(var i=0;(12-ze.length)>i;i++){
            mid+=0;
        }
        return re.substr(0,3)* 3+ mid + re.substr(3,8)*4;
    }else{
        return ze;
    }
}
$.mobileUnEncode= function(ze){
    var mid  = '';
    for(var i=0;(8-(ze.substr(3,ze.length-3)/4+'').length)>i;i++){
        mid+=0;
    }
    return ze.substr(0,3)/3 + mid + ze.substr(3,ze.length-3)/4;
}


$.mobileEncodeManager = function(re){
    ze =re.substr(0,3)* 2 + '' + ((re.substr(3,8)*3));
    if(ze.length<12){
        var mid  = '';
        for(var i=0;(12-ze.length)>i;i++){
            mid+=0;
        }
        return re.substr(0,3)* 2+ mid + re.substr(3,8)*3;
    }else{
        return ze;
    }
}

$.mobileUnEncodeManager= function(ze){
    var mid  = '';
    for(var i=0;(8-(ze.substr(3,ze.length-3)/3+'').length)>i;i++){
        mid+=0;
    }
    return ze.substr(0,3)/2 + mid + ze.substr(3,ze.length-3)/3;
}

$.copyToClipboard = function(text, callback){ // text: 要复制的内容， callback: 回调
    var tag = document.createElement('input');
    tag.setAttribute('id', 'cp_hgz_input');
    tag.value = text;
    document.getElementsByTagName('body')[0].appendChild(tag);
    document.getElementById('cp_hgz_input').select();
    document.execCommand('copy');
    document.getElementById('cp_hgz_input').remove();
    if(callback) {callback(text)}
}



