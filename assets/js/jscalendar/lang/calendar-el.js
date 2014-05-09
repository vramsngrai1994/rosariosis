﻿// ** I18N
Calendar._DN = new Array
("Κυριακή",
 "Δευτέρα",
 "Τρίτη",
 "Τετάρτη",
 "Πέμπτη",
 "Παρασκευή",
 "Σάββατο",
 "Κυριακή");

Calendar._SDN = new Array
("Κυ",
 "Δε",
 "Tρ",
 "Τε",
 "Πε",
 "Πα",
 "Σα",
 "Κυ");

Calendar._MN = new Array
("Ιανουάριος",
 "Φεβρουάριος",
 "Μάρτιος",
 "Απρίλιος",
 "Μάϊος",
 "Ιούνιος",
 "Ιούλιος",
 "Αύγουστος",
 "Σεπτέμβριος",
 "Οκτώβριος",
 "Νοέμβριος",
 "Δεκέμβριος");

/*Calendar._SMN = new Array
("Ιαν",
 "Φεβ",
 "Μαρ",
 "Απρ",
 "Μαι",
 "Ιουν",
 "Ιουλ",
 "Αυγ",
 "Σεπ",
 "Οκτ",
 "Νοε",
 "Δεκ");*/
 Calendar._SMN = new Array
("Jan",
 "Feb",
 "Mar",
 "Apr",
 "May",
 "Jun",
 "Jul",
 "Aug",
 "Sep",
 "Oct",
 "Nov",
 "Dec");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "Για το ημερολόγιο";

Calendar._TT["ABOUT"] =
"Επιλογέας ημερομηνίας/ώρας σε DHTML\n" +
"(c) dynarch.com 2002-2003\n" + // don't translate this this ;-)
"Για τελευταία έκδοση: http://dynarch.com/mishoo/calendar.epl\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"Επιλογή ημερομηνίας:\n" +
"- Χρησιμοποιείστε τα κουμπιά \xab, \xbb για επιλογή έτους\n" +
"- Χρησιμοποιείστε τα κουμπιά " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " για επιλογή μήνα\n" +
"- Κρατήστε κουμπί ποντικού πατημένο στα παραπάνω κουμπιά για πιο γρήγορη επιλογή.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Επιλογή ώρας:\n" +
"- Κάντε κλικ σε ένα από τα μέρη της ώρας για αύξηση\n" +
"- ή Shift-κλικ για μείωση\n" +
"- ή κλικ και μετακίνηση για πιο γρήγορη επιλογή.";
Calendar._TT["TOGGLE"] = "Μπάρα πρώτης ημέρας της εβδομάδας";
Calendar._TT["PREV_YEAR"] = "Προηγ. έτος (κρατήστε για το μενού)";
Calendar._TT["PREV_MONTH"] = "Προηγ. μήνας (κρατήστε για το μενού)";
Calendar._TT["GO_TODAY"] = "Σήμερα";
Calendar._TT["NEXT_MONTH"] = "Επόμενος μήνας (κρατήστε για το μενού)";
Calendar._TT["NEXT_YEAR"] = "Επόμενο έτος (κρατήστε για το μενού)";
Calendar._TT["SEL_DATE"] = "Επιλέξτε ημερομηνία";
Calendar._TT["DRAG_TO_MOVE"] = "Σύρτε για να μετακινήσετε";
Calendar._TT["PART_TODAY"] = " (σήμερα)";
Calendar._TT["MON_FIRST"] = "Εμφάνιση Δευτέρας πρώτα";
Calendar._TT["SUN_FIRST"] = "Εμφάνιση Κυριακής πρώτα";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Display %s first";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Κλείσιμο";
Calendar._TT["TODAY"] = "Σήμερα";
Calendar._TT["TIME_PART"] = "(Shift-)κλικ ή μετακίνηση για αλλαγή";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "dd-mm-y";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %B %e";

Calendar._TT["WK"] = "εβδ";
Calendar._TT["TIME"] = "Time:";
