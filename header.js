/*
============================================
; Title:  WEB-230
; Author: Professor Krasso 
; Date:   20 December 2017
; Modified By: Matthew Howard
; Description: Displays a formatted header
;===========================================
*/ 

/*
    This function accepts four parameters: 
        f = students first name
        l = students last name 
        a = assignment number
    and displays the results.
*/

module.exports = {
    display: function(f, l, a) {
        var msg = "\n" + f + " " + l + "\n" 
            + a + "\nDate: " + new Date().toLocaleDateString(); 
        return msg; 
    }
};