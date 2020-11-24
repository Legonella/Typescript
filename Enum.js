var Membership;
(function (Membership) {
    Membership[Membership["Simpe"] = 0] = "Simpe";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReload = Membership[2];
console.log(membership);
console.log(membershipReload);
