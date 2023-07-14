# Idee für Datenmodell
- Das ist die Beschreibung meiner Idee (siehe ganz unten) durch Chat GPT.
- Das Modell ist noch nicht auf eine Umsetzung mit einem bestimmte Datenbanktyp abgestimmt.
- Es enthält diverse optionale Elemente die vorerst noch nicht benötigt werden.

- Achtung: Aktuell ist eine wesentliche einfache Variante umgesetzt.

## Partie
- `Partienummer`: Eindeutige Ganzzahl
- `Spielergebnis`: Verweis auf das entsprechende Spielergebnis

## Spielergebnis
- `Partienummer`: Verweis auf die entsprechende Partie
- `Spieltyp`: String, aktuell nur "Wordsworm" erlaubt
- `Spielvariante`: Ganzzahl oder Enum, optional
- `Startzeitpunkt`: Zeit & Datum, optional
- `Endzeitpunkt`: Zeit & Datum, optional
- `Gefundene Wortkette`: Geordnete Liste aus Strings, optional
- `Falsch geratene Worte`: Geordnete Liste aus Strings, optional
- `Gesamtpunkte der Partie`: Ganzzahl
- `Punktestände der Teams`: Liste mit Zuordnungen Team-ID: Punkte
- `Punktestände der Spieler`: Liste mit Zuordnungen Spieler-ID: Punkte

## Team
- `ID`: Eindeutige GUID
- `Name`: String, optional
- `Zugehörige Spieler`: Liste von Spieler-IDs

## Spieler
- `ID`: Eindeutige GUID
- `Name`: String
- `Altersbereich`: Ganzzahl, optional

## Berechnung der Punkte (voraussichtlich)
- Für jedes erfolgreich gefundene Wort in einer Partie erhält der Spieler, das Team und die Partie einen Punkt.
- Es kann zusätzliche Punkte geben, die vom Altersbereich eines Spielers abhängen.

---
# Modell vor Bearbeitung mit Chat GPT
---
# Speicherung von Spielergebnissen

Ich möchte die Ergebnisse einer Partie eines Spiels speichern. Ich möchte also nicht Spiele speichern, sondern jeweils das Ergebnis einer Partie. Zu jedem durchgeführten Partie gibt es 1 Spielergebnis.

Das einzige bisher bekannt Spiel, dessen Partie-Ergebnisse gespeichert werden sollen, heißt Wordsworm. Ein Spiel kann einer bestimmten Spielvariante zugehörig sein. Die Angabe der Spielvariante ist optional.

Es können mehrere Partien gespielt werden. Es werden also mehrere Spielergebnisse gespeichert. Die Ergebnisse verschiedener Partien sind unabhängig voneinander. Allerdings können die Partien von gleichen Teams und Spielern gespielt werden.

## Eine Partie
Eine Partie wird von Teams gespielt:
- Es kann 1 oder mehrere Teams in einer Partie geben.
- Die Teams können gegeneinander oder miteinander spielen.
- Ein Team besteht aus 1 oder mehreren Spielern.

## Eigenschaften eines Spielergebnisses
Auswahl der Eigenschaften eines Spielergebnisses:
- Partienummer (einmalig verwendete Ganzzahl)
- Spieltyp: "Wordsworm" (Es gibt aktuell nur diesen Spieltyp.)
- Spielvariante (Ganzzahl oder Enum, optional)
- Startzeitpunkt (Zeit & Datum, optional)
- Endzeitpunkt (Zeit & Datum, optional)
- Gefundene Wortkette (Geordnete Liste aus Strings, optional)
- Falsch geratene Worte (Geordnete Liste aus Strings, optional)

## Punktestände
Bei jeder Partie entstehen die folgenden Punktestände:
- Gesamtpunkte der Partie (Ganzzahl)
- Gesamtpunkte eines jeden Teams in der Partie. (Liste mit Zuordnung Team: Punkte)
- Punkte eines jeden Spielers in der Partie. (Liste mit Zuordnung Spieler: Punkte)
- Die Gesamtpunkte des Spiels ergeben sich nicht direkt durch Addition der Punkte der Teams oder der Spieler.
- Die Gesamtpunkte des Teams in dem Spielergebnis ergeben sich nicht direkt durch Addition der Punkte der Spieler.
- Die Punktestände werden im Spielergebnis gespeichert.

### Voraussichtliche Berechnung der Punkte
- Für jedes im Spiel erfolgreich gefundene Wort erhalten der Spieler, das Team und die Partie einen Punkt.
- Um die Motivation für Kinder zu erhöhen kann es zusätzliche Punkte geben, die zum Beispiel vom Altersbereich eines Spielers abhängen.
- Für das Modell spielen die Modifikatoren keine Rolle.

## Team
Ein Team hat die folgenden Eigenschaften:
- ID (GUID)
- Name des Teams (optional)
- Zugehörige Spieler (mindestens 1 Spieler)

## Spieler
Ein Spieler hat die folgenden Eigenschaften:
- ID (GUID)
- Name (String)
- Altersbereich (Integer, optional)
