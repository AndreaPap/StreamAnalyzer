Simple stream analyzer.

Its purpose is to calculate the information carried by the new stream with respect to prior knowledge: I[ New | Priori ] .

This is done by calculating:
-log2( P( New | Priori ) ), where P( New | Priori ) is assumed to be equal to Prod_i ( P_priori_i( New_i ) ).

An example of use for evaluate chord's surprise:

<img width="1919" height="938" alt="immagine" src="https://github.com/user-attachments/assets/33d3715f-706a-457e-bedd-4d9acd950eca" />


In left side complete stream, in right new stream. Press evaluate or Enter in new textarea and script will calculate Info. :-)
