import fitz # PyMuPDF
import os

pdf_path = "TOUS LES PANNEAUX.pdf"
output_dir = "images/panneaux"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
image_count = 0

for i in range(len(doc)):
    page = doc[i]
    image_list = page.get_images(full=True)
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"panneau_{image_count}.{image_ext}"
        
        with open(os.path.join(output_dir, image_name), "wb") as f:
            f.write(image_bytes)
        image_count += 1

print(f"Extracted {image_count} images.")
