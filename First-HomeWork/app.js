let name = "Dan";
alert(
  `hello ${name + 1}`
); /* string: hello NaN. რადგან ცვლადის მნიშვნელობა არის Dan, შესაბამისად სიტყვებზე(ასოებზე) მათემატიკური ოპერაცია ვერ
 განხორციელდება.*/
/* ეხლა გავიგე უკვე */
alert(`hello ${"name"}`); // string: hello name. რადგან თვითონ სტრინგია უკვე name, ბრჭყალებშია მოცემული და არ არის ჩასმული ცვლადი.
alert("hello ${name}"); // string: hello ${name}. აქ უბრალოდ ერთი მთლიანი სტრინგია მოცემული.
alert(
  'hello ${"name"}'
); /* string: hello ${"name"}. აქაც ერთი მთლიანი სტრინგია მოცემული შესაბამისად დაკოპირდება ყველაფერი მიუხედავად იმისა
რომ name ცალკე სტრინგშია*/
