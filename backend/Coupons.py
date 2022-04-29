from Coupon import Coupon

class Coupons():
    def __init__(self):
        self._coupons = list()

    #getter

    def getCoupons(self):
        return self._coupons

    #adding a new coupon

    def addCoupon(self, coupon):
        self._coupons.append(coupon)

    #editing a coupon in the list of coupons

    def editCoupon(self, title, newTitle):
        for coup in self._coupons:
            if(coup.getTitle() == title):
                coup.setTitle(newTitle)

    #removing coupons from list of coupons

    def removeCoupon(self, title):
        for coup in self._coupons:
            if(coup._title == title):
                self._coupons.pop(self._coupons.index(coup))

#testing

testCoupon = Coupons()
testTitles = ["20 percent off", "Half off", "free with purchase of another", "test to remove", "Ten percent discount on all items"]
for i in testTitles:
    c = Coupon()
    c.setTitle(i)
    testCoupon.addCoupon(c)
for i in testCoupon.getCoupons():
    print(i.getTitle())
testCoupon.editCoupon("Half off", "50 percent off any order")
for i in testCoupon.getCoupons():
    print(i.getTitle())
testCoupon.removeCoupon("test to remove")

for i in testCoupon.getCoupons():
    print(i.getTitle())

