// Input ile 5 eded daxil edin. 7'ye beraber olanların sayini tapib ekrana yazdırin

// var i=0;say=0;
// while(i<5){
//   var n=+prompt("Eded daxil edin")
//   if(n==7){
//     say++;
//   }
//   i++;
// }
// console.log(i)

//--------------------------------------------------------------------------------------------------


// Input ile daxil olunan ədədin sade bolenlerini cixartsin

// function isPrime(number) {
//   if (number <= 1) {
//       return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//           return false;
//       }
//   }

//   return true;
// }

//--------------------------------------------------------------------------------------------------

//ededin sade bolenleri

// function findPrimeDivisors(number) {
//   let primeDivisors = [];

//   for (let i = 2; i <= number; i++) {
//       if (number % i === 0 && isPrime(i)) {
//           primeDivisors.push(i);
//       }
//   }

//   return primeDivisors;
// }

// let userInput = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin:"));
// let result = findPrimeDivisors(userInput);

// console.log(`Daxil etdiyiniz ədədin sadə bölenləri: ${result}`);

//--------------------------------------------------------------------------------------------------


// * 3 reqemli eded daxil edirik ededin evveline ve sonuna string ile 3 elave edirik

// var a="3"
// var b=155
// var c="3"
// var sum=0
// sum=a+b+c

// console.log(sum)

// function addThreeToNumber(number) {
//   if (number >= 100 && number <= 999) {
//       let numberAsString = number.toString();
//       let result = "3" + numberAsString + "3";
//       return result;
//   } else {
//       return "Daxil etdiyiniz ədəd 3 rəqəmli deyil!";
//   }
// }

// let userInput = parseInt(prompt("Zəhmət olmasa 3 rəqəmli bir ədəd daxil edin:"));
// let modifiedNumber = addThreeToNumber(userInput);

// console.log(`Ədədin evvəlinə və sonuna "3" əlavə edildikdə: ${modifiedNumber}`);

//--------------------------------------------------------------------------------------------------


//ededin bolenleri

// function findDivisors(number) {
//   let divisors = [];

//   for (let i = 1; i <= number; i++) {
//       if (number % i === 0) {
//           divisors.push(i);
//       }
//   }

//   return divisors;
// }

// let userInput = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin:"));
// let result = findDivisors(userInput);

// console.log(`Daxil etdiyiniz ədədin bölənləri: ${result}`);

//--------------------------------------------------------------------------------------------------

//ededin tersini

// function tersiniTap(input){
//   var tersi=''
//   for (var i = input.length-1; i>=0; i--){
//     tersi += input[i]
//   }
//   return tersi
// }
// console.log(tersiniTap("hello"))

// ededin tersine cevrilmesi
// function reverseArray(arr){
//   var reverse=''
//   for (var i = arr.length-1; i>=0; i--){
//     reverse+= arr[i]
//   }
//   return reverse
// }
// console.log(+reverseArray("5100"))

//--------------------------------------------------------------------------------------------------


// Input ile daxil olunan ədədin bölənlərinin sayını tapın.

// function bolenlerinSayiTap() {
//   let inputEded = prompt("Ədədi daxil edin:"); // İstifadəçidən ədədi daxil etməsini istəyirik
//   let eded = parseInt(inputEded); // Daxil edilmiş dəyəri ədəd tipinə çeviririk

//   let bolenSayi = 0; // Bölənlərin sayını qeyd etmək üçün bir dəyişən

//   for (let i = 1; i <= eded; i++) {
//       if (eded % i === 0) {
//           // Əgər ədəd i-ə tam bölünürsə, bölən sayını artırırıq
//           bolenSayi++;
//       }
//   }

//   console.log("Daxil edilən ədədin bölənlərinin sayı: " + bolenSayi);
// }

// bolenlerinSayiTap(); // funksiyani çağırırıq


//--------------------------------------------------------------------------------------------------


// Input ile daxil olunan ədədin bölənlərinin cəmini tapın.

// function bolenlerinCemiTap() {
//   let inputEded = prompt("Ədədi daxil edin:");
//   let eded = parseInt(inputEded);

//   let cem = 0;

//   for (let i = 1; i <= eded; i++) {
//       if (eded % i === 0) {
//           // Əgər ədəd i-ə tam bölünürsə, i-dəyişənini cəmə əlavə edirik
//           cem += i;
//       }
//   }

//   console.log("Daxil edilən ədədin bölənlərinin cəmi: " + cem);
// }

// bolenlerinCemiTap();

//--------------------------------------------------------------------------------------------------

// Input ile daxil olunan ədədin bölənlərinin hasilini tapın.
 
// function bolenlerinHasiliTap() {
//   let inputEded = prompt("Ədədi daxil edin:");
//   let eded = parseInt(inputEded);

//   let hasil = 1; // Bölmə işləri üçün 1-dən başlayırıq

//   for (let i = 1; i <= eded; i++) {
//       if (eded % i === 0) {
//           // Əgər ədəd i-ə tam bölünürsə, hasil dəyişənini i ilə vururuq
//           hasil *= i;
//       }
//   }

//   console.log("Daxil edilən ədədin bölənlərinin hasil: " + hasil);
// }

// bolenlerinHasiliTap();

//--------------------------------------------------------------------------------------------------


// Input ile daxil olunan ədədin neçə rəqəmli olduğunu tapın.

// function reqemSayiniTap() {
//   let inputEded = prompt("Ədədi daxil edin:");
//   let eded = parseInt(inputEded);

//   let reqemSayi = eded.toString().length; // Ədədin neçə rəqəmli olduğunu tapmaq üçün string-ə çevirib uzunluğunu tapırıq

//   console.log("Daxil edilən ədəd " + reqemSayi + " rəqəmlidir.");
// }

// reqemSayiniTap();

//--------------------------------------------------------------------------------------------------

//ededin factorialinin tapilmasi 

// function faktorialTap(eded) {
//   if (eded === 0 || eded === 1) {
//       return 1;
//   } else {
//       let hasil = 1;
//       for (let i = 2; i <= eded; i++) {
//           hasil *= i;
//       }
//       return hasil;
//   }
// }

// let eded = 5; // Faktorialını tapmaq istədiyimiz ədəd
// let faktorial = faktorialTap(eded);
// console.log(eded + " ədədin faktorialı: " + faktorial);










