Simple stream analyzer.

Its purpose is to calculate the information carried by the new stream with respect to prior knowledge: I[ New | Priori ] .
This is done by calculating -log2(P(New | Priori)), where P(New | Priori) is assumed to be equal to Prod_i (P_priori_i (New_i)).

An example of use for evaluate chord's surprise:
<img width="1917" height="934" alt="immagine" src="https://github.com/user-attachments/assets/f259dee8-81cb-4e30-b714-18de9649bf2a" />

In left side complete stream, in right new stream. Press evaluate and script will calculate Info. :-)
