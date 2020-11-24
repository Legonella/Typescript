enum Membership {
    Simpe,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReload = Membership[2]
console.log(membership)
console.log(membershipReload)
