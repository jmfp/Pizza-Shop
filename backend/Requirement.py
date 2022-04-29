import re
from typing import Dict
from enum import Enum

class Requirement():
    def __init__(self):
        self._category = {"Pizza": False, "Side": False, "Salad": False,
        "Desert": False, "Beverage": False}
        self._size = {"Small": False, "Medium": False, "Large": False, "X-Large": False}
        self._qty = None

    #category

    def getCategory(self):
        return self._category

    def setCategory(self, category, bool):
        self._category[category] = bool


    #size

    def getSize(self):
        return self._size

    def setSize(self, size, bool):
        self._size[size] = bool

    #quantity

    def getQty(self):
        return self._qty

    def setQty(self, quantity):
        self._qty = quantity
    
#testing
req = Requirement()
print(req.getCategory())
req.setCategory("Pizza", True)
print(req.getCategory())
req.setSize("Medium", True)
print(req.getSize())
req.setQty(2)
print(req.getQty())
