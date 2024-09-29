let grade = 86

// A grade less than 40 should be Grade E
if(grade>=0 && grade<=39) {console.log("Grade E")}

// A grade between 40 and 49 should be Grade D
else if(grade>=40 && grade<=49) {console.log("Grade D")}

// A grade between 50 and 59 should be Grade C
else if(grade>=50 && grade<=59) {console.log("Grade C")}

// A grade between 60 and 79 should be Grade B
else if(grade>=60 && grade<=79) {console.log("Grade B")}

// A grade between 80 and 100 should be Grade A
else if(grade>=80 && grade<=100) {console.log("Grade A")}

// If a grade does not range from 0 to 100, the output should be "Invalid Output"
else(console.log("Invalid Input"))

