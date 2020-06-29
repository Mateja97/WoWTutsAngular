import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  videos: string[] = ['https://www.youtube.com/embed/-gLlhmoz8i8', 'https://www.youtube.com/embed/fYGExUSIbFY', 'https://www.youtube.com/embed/KmXnEHGXMac', 'https://youtube.com/embed/pugANus-a1M',
'https://www.youtube.com/embed/jD4Ds6f_6wo', 'https://youtube.com/embed/CRve_L8-RHA', 'https://www.youtube.com/embed/7e1aF4DfSS8', 'https://www.youtube.com/embed/d1svxUhBiq8', 'https://www.youtube.com/embed/XI0nJFtrfV0',
 'https://www.youtube.com/embed/RehQ6Ru-aS4', 'https://www.youtube.com/embed/M-y_BulIY54', 'https://www.youtube.com/embed/Cp3nIhf2tfk', 'https://www.youtube.com/embed/2K-cYvBQljQ', 'https://www.youtube.com/embed/kyK7gra_IUc',
'https://www.youtube.com/embed/qRcmhimNNKM', 'https://www.youtube.com/embed/jLUBeXtP8Yw', 'https://www.youtube.com/embed/v2peoyaNRkw', 'https://www.youtube.com/embed/E-RC22F6z_U',
'https://www.youtube.com/embed/ieGnHENE7JQ', 'https://www.youtube.com/embed/yFErn63xqXE', 'https://www.youtube.com/embed/IMoYxz3avF0', 'https://www.youtube.com/embed/-iXERy3FGmE', 'https://www.youtube.com/embed/_H9UlnCZtS4',
'https://www.youtube.com/embed/LWvTeIcuto8', 'https://www.youtube.com/embed/RFHiLJVBP1g', 'https://www.youtube.com/embed/4B3dpeOxMz0', 'https://www.youtube.com/embed/LyQ75Oxx9hM', 'https://www.youtube.com/embed/bxdKsMg1feg?list=TLPQMjgwNjIwMjAgxk6aVcEq9A',
'https://www.youtube.com/embed/xODHhBj_P_M', 'https://www.youtube.com/embed/8TksuZylUd0'];
  constructor() { }
}
