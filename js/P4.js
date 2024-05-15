/* Copyright (c) 2023 Monte Kietpawpan
 * All rights reserved.
 * studyP3R1.js v1.0.1 | May 14, 2023
 */

    
function studyP3R1(){
	var startSemesterDate = new Date("2023-05-18");
   	var date = document.getElementById('datepicker').value;
    	var sDate = date.toString();
    	var datearray = sDate.split("/");
    	var newdatef = datearray[2] + '/' + datearray[0] + '/' + datearray[1];
    	var newDate1 = newdatef.replace("/","-");
    	var newDate2 = newDate1.replace("/","-");
    	var fDate = new Date(newDate2);
	var subjects = "";
	var engLab = "หนังสือ Power Up 3 เล่ม\n\n";
	var thai = "สมุดภาษาไทยสีชมพู + วรรณคดีลำนำ + แบบฝึกหัดคัดไทย\n\n";
	var mathIE = "หนังสือ Math (ไม่ใช้สมุด)\n\n";
	var mathTH = "สมุดคณิตศาสตร์สีขาว\n\n";    	
	var scienceTH = "สมุดวิทย์สีขาว + หนังสือวิทย์ + แบบฝึกหัดวิทย์\n\n";
	var scienceIE = "สมุด Science สีชมพู + My World of Science (ยังไม่มี)\n\n";
	var socialTH = "สมุดสังคมสีขาว + หนังสือสังคม-ประวัติศาสตร์\n\n";
	var socialIE = "สมุด Social สีชมพู + หนังสือ My World of Social Studies\n\n";
	var funEng = "สมุด Fun Eng สีขาว + หนังสือ Power Up + ส่งหนังสือ Handwriting\n\n";
	var devEng = "สมุด Dev Eng สีขาว + หนังสือ Power Up\n\n";
  	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา\n\n";
	var chinese = "หนังสือภาษาจีน (ไม่ใช้สมุด)\n\n";
	var art = "สมุดวาดเขียน + สี oil pastel 36 สีขึ้นไป แปรง ใส่กระเป๋าเล็ก\n\n"
  	var everyday = "สมุดจดการบ้าน + สมุดสำรองสีขาว + หนังสือ Reading Aloud + หนังสือ My World of Vocabulary + สีไม้\n\n";
  	var health = "สมุดสุขศึกษาสีชมพู + หนังสือสุขศึกษา\n\n";
	var socialTH = "สมุดสังคมสีขาว + หนังสือสังคม\n\n";
	var computer = "สมุดการงานอาชีพสีชมพู\n\n";
	var history = "สมุดประวัติศาสตร์สีขาว + หนังสือประวัติศาสตร์\n\n";
	var club = "ชมรม\n\n";
        var scout ="รองเท้าผ้าใบ (เริ่มใส่ลูกเสือ 30 มิ.ย.)\n\n";
	var sport = "พละ รองเท้าผ้าใบ\n\n";
	var music = "ดนตรีไทย\n\n";
	var SGL = "SGL\n\n";
	var period8 = "คาบ 8 (เลิก 16.40 น.)";
    
 
    	var tDay = fDate.getDay();
    	var tMonth = fDate.getMonth();
    	var thYear = fDate.getFullYear()+543;
    	const dayName = ["อาทิตย์", "จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
    	const monthName = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ตุลาคม"];
    	var thDate = fDate.getDate();
    	var thDay = dayName[tDay];
    	var thMonth = monthName[tMonth];
	if(thDate=="16" && thMonth=="พฤษภาคม"){subjects = "ปฐมนิเทศน์\n\n" + everyday + engLab + funEng + scienceIE + devEng + scout + period8;} 
	else if(thDay=="จันทร์"){subjects = everyday + computer + scienceIE + chinese + thai + scienceTH + mathTH + period8;}
	else if(thDay=="อังคาร"){subjects = everyday + scienceTH + mathIE + health + thai + socialIE + mathTH + club + period8;}
	else if(thDay=="พุธ"){subjects = everyday + mathTH + scienceTH + funEng + thai + socialTH + mathIE + SGL + period8;}
	else if(thDay=="พฤหัสบดี"){subjects = everyday + thai + sport + engLab + funEng + scienceIE + devEng + scout + period8;} 
	else if(thDay=="ศุกร์"){subjects = everyday + socialIE + devEng + socialTH + art + history + mathTH + thai + period8;} 
	else{subjects="หยุดเรียน";}

    document.getElementById("myDate").innerHTML ="วัน" +  thDay + "ที่ "  +  thDate + " " + thMonth + " " + thYear + ":\n==================\n\n"   
+ subjects + "\n\n======\n";
} 
