Simple stream analyzer.

Its purpose is to calculate the information carried by the new stream with respect to prior knowledge: I[ New | Priori ] .
This is done by calculating -log2( P( New | Priori ) ), where P( New | Priori ) is assumed to be equal to Prod_i ( P_priori_i( New_i ) ).

An example of use for evaluate chord's surprise:
<img width="1914" height="935" alt="immagine" src="https://github.com/user-attachments/assets/b4b4929f-0c5d-4853-9f9a-9c9b29964e0a" />


In left side complete stream, in right new stream. Press evaluate or Enter in new textarea and script will calculate Info. :-)
