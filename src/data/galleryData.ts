import { GalleryItem } from '../types';

import heroImg from '../assets/images/hero_chocolate_latte_cafe_1790398329175.jpg';
import storyImg from '../assets/images/story_chocolate_interior_1790398346682.jpg';
import pourImg from '../assets/images/chocolate_signature_pour_1790398363205.jpg';
import dessertImg from '../assets/images/dessert_chocolate_creation_1790398378545.jpg';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    titleEn: 'Silky Chocolate Pour',
    titleTh: 'การรินช็อกโกแลตร้อนเนียนละมุน',
    category: 'chocolate',
    image: pourImg,
    captionEn: 'Melted dark chocolate prepared fresh for our signature hot chocolate service.',
    captionTh: 'ดาร์กช็อกโกแลตละลายสดใหม่สำหรับเสิร์ฟช็อกโกแลตร้อนซิกเนเจอร์',
  },
  {
    id: 'gal-2',
    titleEn: 'Warm Boutique Salon',
    titleTh: 'บรรยากาศอบอุ่นภายในร้าน',
    category: 'atmosphere',
    image: storyImg,
    captionEn: 'Subdued amber lighting and dark wood accents creating an intimate retreat in Bangkok.',
    captionTh: 'แสงไฟสีอำผ่อนคลายและดีไซน์ไม้สีเข้ม สร้างมุมพักผ่อนแสนสบายในกรุงเทพฯ',
  },
  {
    id: 'gal-3',
    titleEn: 'Signature Chocolate Tart',
    titleTh: 'ทาร์ตช็อกโกแลตซิกเนเจอร์',
    category: 'desserts',
    image: dessertImg,
    captionEn: 'Single-origin chocolate mousse tart crowned with delicate gold leaf.',
    captionTh: 'ทาร์ตมูสดาร์กช็อกโกแลตเนื้อเนียนละเอียด ประดับด้วยแผ่นทองคำบริสุทธิ์',
  },
  {
    id: 'gal-4',
    titleEn: 'Coffee & Truffle Pairings',
    titleTh: 'การจับคู่กาแฟและช็อกโกแลตทรัฟเฟิล',
    category: 'coffee',
    image: heroImg,
    captionEn: 'Freshly pulled specialty latte alongside handcrafted cacao bonbons on dark marble.',
    captionTh: 'ลาเต้ร้อนรสละมุนเสิร์ฟคู่กับช็อกโกแลตบงบงทำมือบนโต๊ะหินอ่อน',
  },
  {
    id: 'gal-5',
    titleEn: 'Artisanal Cacao Crafting',
    titleTh: 'ความประณีตในการทำช็อกโกแลต',
    category: 'chocolate',
    image: pourImg,
    captionEn: 'Delicate dusting of raw cocoa powder during preparation of specialty chocolates.',
    captionTh: 'การโรยผงโกโก้แท้เพื่อเพิ่มสัมผัสและกลิ่นหอมอันลุ่มลึก',
  },
  {
    id: 'gal-6',
    titleEn: 'Afternoon Sweet Moments',
    titleTh: 'ช่วงเวลาแห่งความสุขยามบ่าย',
    category: 'moments',
    image: storyImg,
    captionEn: 'Quiet conversation and shared sweet indulgence away from the bustling city rhythm.',
    captionTh: 'บทสนทนาอันแสนผ่อนคลายและขนมหวานแสนอร่อย ท่ามกลางความเงียบสงบใจกลางเมือง',
  },
];
