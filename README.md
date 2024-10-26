# Parcel-locker-system-with-siemensS7
![Image5](https://github.com/user-attachments/assets/044d81d7-c38f-4301-a94c-9a48e2a791cd)

This is the same project as named "Parcel locker" but int this one instead of Arduino microcontroller i use a Siemens S7-1500 PLC to treat the parcel lockers like open boxes and RFID reading.
On the screen of the parcel lockers runs an Angular application in the browser. This is the User Interface. This Angular app communicates with the NodeJs server via HTTP protocoll. The NodeJs server is a modbus client too, and communicates with the PLC via modbus.

Courier logins at the parcel locker:

![image](https://github.com/user-attachments/assets/ab4d5902-16de-493f-86d5-8f36f3d47a99)

