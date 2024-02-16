'use strict';

/* The search() Method */ 

var s = "I like apples but I like oranges too.";

var p = s.search("apples");

document.getElementById("search").innerHTML = 'In the given string "I like apples but I like oranges too.", the position of the word "apples" is at ' + p;

/* The indexOf() Method */ 

var p_idx = s.indexOf("like");

document.getElementById("indexof").innerHTML = 'In the given string "I like apples but I like oranges too.", the position of the word "like" is at  ' + p_idx;

/* The lastIndexOf() Method */

var p_idx_last = s.lastIndexOf("like");

document.getElementById("lastindexof").innerHTML = 'In the given string "I like apples but I like oranges too.", the position of the word "like" is at  ' + p_idx_last;

/* The length property */

var s_len = s.length;

document.getElementById("length").innerHTML = 'The length of the string "I like apples but I like oranges too." is ' + s_len;

/* The slice() method*/

var slicedstr = s.slice(7, 14);

document.getElementById("slice").innerHTML = 'The sliced string that lies between the positions 7 and 15 in the string "I like apples but I like oranges too." is: ' + slicedstr;

/* The substring() method */

var sub_str = s.substring(7);

document.getElementById("substring").innerHTML = 'The extracted substring from the starting position 7 in the string "I like apples but I like oranges too." ' + sub_str;

/* The substr() method */

var sub_strg = s.substr(7, 4);

document.getElementById("substr").innerHTML = 'The extracted substring with length 4, from the starting position 7 in the string "I like apples but I like oranges too." is: ' + sub_str;

/* The replace() method */

var rep_str = s.replace("oranges", "grapes");

document.getElementById("replace").innerHTML = 'The original string is "I like apples but I like oranges too." while the replaced string is: ' + rep_str;

/*The concat() method*/

var new_str = s.concat (" Which is your favorite fruit?");

document.getElementById("concat").innerHTML = 'The original string is "I like apples but I like oranges too. " while the concatenated string is:  ' + new_str;

/*The charAt() method*/

var char_pos = s.charAt(5);

document.getElementById("charat").innerHTML = 'The character at position 5 in the string "I like apples but I like oranges too." is: ' + char_pos;