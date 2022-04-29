from Requirement import Requirement

class Coupon():
    def __init__(self):
        self._title = None
        self._description = None
        self._requirements = list()
        self._restrictions = None
        self._discount = None
        self._expDate = None


    #title

    def getTitle(self):
        return self._title

    def setTitle(self, title):
        self._title = title

    #description

    def getDescription(self):
        return self._description

    def setDescription(self, description):
        self._description = description


    #requirments

    def addRequirement(self, requirement):
        self._requirements.append(requirement)

    def removeRequirement(self, requirement):
        for req in self._requirements:
            if req == requirement:
                self._requirements.pop(self._requirements.index(req))
    

    #discount

    def getDiscount(self):
        return self._discount

    def setDiscount(self, discount):
        self._discount = discount


    #expiration date

    def get_expDate(self):
        return self._expDate

    def set_expDate(self, expDate):
        self._expDate = expDate


    #restrictions

    def getRestrictions(self):
        return self._restrictions

    def setRestrictions(self, restriction):
        self._restrictions = restriction

#testing code, should be deleted
coupon = Coupon()
coupon.setTitle("Half off large pizza")
coupon.setDescription("Get half off a large pizza with the purchase of another large pizza")

#testing requirements
req = Requirement()
req_2 = Requirement()
req.setCategory("Pizza", True)
req.setSize("Medium", True)
req_2.setCategory("Side", True)
req_2.setSize("Small", True)
coupon.addRequirement(req)
coupon.addRequirement(req_2)
print("Requirements:")
print(coupon._requirements)
coupon.removeRequirement(req_2)
print("requirements after removal:")
print(coupon._requirements)
#using a string to test discount and expiration date for now 
coupon.setDiscount("50%")
coupon.set_expDate("12/27/22")
print(coupon.getTitle(), 
coupon.getDiscount(), coupon.get_expDate(), coupon._requirements)    

    