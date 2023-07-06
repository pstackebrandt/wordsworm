# Wörterwurm Spiel

Wörterwurm ist ein einfaches, aber fesselndes Text-basiertes Spiel, das in der Konsole gespielt wird. Es wurde in JavaScript ES6 geschrieben und nutzt die eingebaute 'readline'-Bibliothek von Node.js, um Eingaben von der Konsole einzulesen.

## Spielregeln und Ablauf

1. **Spielstart**: Beim Start des Spiels wird das erste Wort, "Anfang", vom System festgelegt und ausgegeben.

2. **Spielername**: Es gibt nur einen Spieler, genannt "Player 1".

3. **Spielablauf**: Das System fordert den Spieler auf, das nächste Wort einzugeben. Das Wort muss mit dem Buchstaben beginnen, mit dem das vorherige Wort endet. Groß- und Kleinschreibung werden nicht berücksichtigt, sodass "Apfel" und "apfel" als dasselbe Wort angesehen werden.

4. **Wortprüfung**: Das System prüft, ob das eingegebene Wort gültig ist. Ein Wort ist gültig, wenn es mit dem letzten Buchstaben des vorherigen Wortes beginnt und noch nicht in der bisherigen Wortliste aufgeführt ist. 

5. **Spielverlauf**: Bei einer erfolgreichen Wortfindung fügt das System das Wort zur Wortliste hinzu und gratuliert dem Spieler. Wenn das Wort ungültig ist, fordert das System den Spieler auf, es erneut zu versuchen.

6. **Spielende**: Das Spiel endet, wenn der Spieler zweimal hintereinander keine Eingabe tätigt. Das System berechnet die Punkte des Spielers, die sich aus der Anzahl der gefundenen Wörter ergeben, und gibt sie aus.

## Zukunftsausblick

Insgesamt ist "Wörterwurm" ein einfaches, aber unterhaltsames Spiel, das die Wortkenntnisse der Spieler herausfordert und erweitert. Es hat das Potenzial für weitere Verbesserungen und Erweiterungen, wie zum Beispiel die Hinzufügung von mehreren Spielern, Zeiteinschränkungen oder speziellen Punkteregeln.
