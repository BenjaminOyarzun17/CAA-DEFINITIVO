import qrcode

qr = qrcode.QRCode(version =1,error_correction=qrcode.constants.ERROR_CORRECT_L,box_size=50, border =2)
#qr.add_data("https://caamorus2021.com/#/")
qr.add_data("https://www.instagram.com/soywapolistaa/")

qr.make (fit = True)

img = qr.make_image(fill_color = "black", back_color  = "white")

#img.save("listaAQR.png")
img.save("instagramListaAQR.png")
