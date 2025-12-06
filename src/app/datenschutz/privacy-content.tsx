"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyContent() {
  const { language } = useLanguage();

  const heading = language === "de" ? "Datenschutz" : "Privacy Policy";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="prose max-w-none prose-slate dark:prose-invert">
        <h1>{heading}</h1>
        {language === "de" ? <GermanPrivacy /> : <EnglishPrivacy />}
      </div>
    </div>
  );
}

function GermanPrivacy() {
  return (
    <>
      <h2>1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </p>

      <h3>Datenerfassung auf dieser Website</h3>
      <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
      <p>
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis
        zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
      </p>

      <h3>Wie erfassen wir Ihre Daten?</h3>
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </p>
      <p>
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
        der Website durch unsere IT-Systeme erfasst. Das sind vor allem
        technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
        Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
        Sie diese Website betreten.
      </p>

      <h3>Wofür nutzen wir Ihre Daten?</h3>
      <p>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </p>

      <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
      <p>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
        dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
        für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>
      <p>
        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
        jederzeit an uns wenden.
      </p>

      <h2>2. Hosting</h2>
      <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
      <h3>Squarespace</h3>
      <p>
        Anbieter ist die Squarespace Ireland Ltd., Le Pole House, Ship Street
        Great, Dublin 8, Irland (nachfolgend Squarespace).
      </p>
      <p>
        Squarespace ist ein Tool zum Erstellen und zum Hosten von Websites. Wenn
        Sie unsere Website besuchen, werden Ihre Daten auf den Servern von
        Squarespace verarbeitet. Hierbei können auch personenbezogene Daten an
        das Mutterunternehmen von Squarespace, die Squarespace Inc., 8 Clarkson
        St, New York, NY 10014, USA übermittelt werden. Squarespace speichert
        ferner Cookies, die für die Darstellung der Seite und zur Gewährleistung
        der Sicherheit erforderlich sind (notwendige Cookies).
      </p>
      <p>
        Die Verwendung von Squarespace erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
        zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
        Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit
        die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p>
        Die Datenübertragung in die USA wird auf die
        Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie
        hier: https://support.squarespace.com/hc/de/articles/360000851908-DSGVO-und-Squarespace.
      </p>
      <p>
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
        Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
        Europäischen Union und den USA, der die Einhaltung europäischer
        Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
        soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
        diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
        erhalten Sie vom Anbieter unter folgendem Link:
        https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnjcAAC&status=Active.
      </p>

      <h2>3. Allgemeine Hinweise und Pflicht­informationen</h2>
      <h3>Datenschutz</h3>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>
      <p>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>

      <h3>Hinweis zur verantwortlichen Stelle</h3>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p>Raymond Bertram</p>
      <p>21244 Buchholz</p>
      <p>E-Mail: contact@bertram-tech.de</p>
      <p>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
        o. Ä.) entscheidet.
      </p>

      <h3>Speicherdauer</h3>
      <p>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere
        Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
        uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
        keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
        personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
        Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
        Fortfall dieser Gründe.
      </p>

      <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
      <p>
        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir
        Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
        nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
        ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten
        in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von
        Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
        oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via
        Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
        zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist
        jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
        Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
        Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
        verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen
        Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c
        DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
        berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über
        die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
        folgenden Absätzen dieser Datenschutzerklärung informiert.
      </p>

      <h3>Empfänger von personenbezogenen Daten</h3>
      <p>
        Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
        externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung
        von personenbezogenen Daten an diese externen Stellen erforderlich. Wir
        geben personenbezogene Daten nur dann an externe Stellen weiter, wenn
        dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir
        gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an
        Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1
        lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
        Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
        Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur
        auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter.
        Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame
        Verarbeitung geschlossen.
      </p>

      <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
      <p>
        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
        DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
        IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
        PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
        AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
        RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
        DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
        IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
        DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
        NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER
        DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG
        VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
      </p>
      <p>
        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
        BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
        VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
        DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT
        ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN,
        WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE
        DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
      </p>

      <h3>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
      <p>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
        Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
        Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
        des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
        Rechtsbehelfe.
      </p>

      <h3>Recht auf Daten­übertrag­barkeit</h3>
      <p>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>

      <h3>Auskunft, Berichtigung und Löschung</h3>
      <p>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
        dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
        Daten können Sie sich jederzeit an uns wenden.
      </p>

      <h3>Recht auf Einschränkung der Verarbeitung</h3>
      <p>
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
        an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
        folgenden Fällen:
      </p>
      <ul>
        <li>
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li>
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah/geschieht, können Sie statt der Löschung die Einschränkung der
          Datenverarbeitung verlangen.
        </li>
        <li>
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
          jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li>
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </li>
      </ul>
      <p>
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
        haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
        Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
        oder juristischen Person oder aus Gründen eines wichtigen öffentlichen
        Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet
        werden.
      </p>

      <h3>SSL- bzw. TLS-Verschlüsselung</h3>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
        Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
        des Browsers von „http://“ auf „https://“ wechselt und an dem
        Schloss-Symbol in Ihrer Browserzeile.
      </p>
      <p>
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </p>

      <h3>Widerspruch gegen Werbe-E-Mails</h3>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
        Werbung und Informationsmaterialien wird hiermit widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-E-Mails, vor.
      </p>

      <h2>4. Datenerfassung auf dieser Website</h2>
      <h3>Kontaktformular</h3>
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>
      <p>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde;
        die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p>
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
        bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
        widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
        Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>

      <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
      <p>
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
        Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
        (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
        gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </p>
      <p>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde;
        die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p>
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
        bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
        Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
        gesetzliche Bestimmungen – insbesondere gesetzliche
        Aufbewahrungsfristen – bleiben unberührt.
      </p>

      <h2>5. Soziale Medien</h2>
      <h3>Instagram</h3>
      <p>
        Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden.
        Diese Funktionen werden angeboten durch die Meta Platforms Ireland
        Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
      </p>
      <p>
        Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung
        zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram
        erhält dadurch Informationen über den Besuch dieser Website durch Sie.
      </p>
      <p>
        Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch
        Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem
        Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser
        Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als
        Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten
        sowie deren Nutzung durch Instagram erhalten.
      </p>
      <p>
        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung
        nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung
        ist jederzeit widerrufbar.
      </p>
      <p>
        Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf
        unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet
        werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal
        Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese
        Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame
        Verantwortlichkeit beschränkt sich dabei ausschließlich auf die
        Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die
        nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw.
        Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam
        obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame
        Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie
        unter: https://www.facebook.com/legal/controller_addendum. Laut dieser
        Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim
        Einsatz des Facebook- bzw. Instagram-Tools und für die
        datenschutzrechtlich sichere Implementierung des Tools auf unserer
        Website verantwortlich. Für die Datensicherheit der Facebook bzw.
        Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B.
        Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
        verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn
        Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet,
        diese an Facebook weiterzuleiten.
      </p>
      <p>
        Die Datenübertragung in die USA wird auf die
        Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie
        hier: https://www.facebook.com/legal/EU_data_transfer_addendum,
        https://privacycenter.instagram.com/policy/ und
        https://de-de.facebook.com/help/566994660333381.
      </p>
      <p>
        Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von
        Instagram: https://privacycenter.instagram.com/policy/.
      </p>
      <p>
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
        Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
        Europäischen Union und den USA, der die Einhaltung europäischer
        Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten
        soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
        diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu
        erhalten Sie vom Anbieter unter folgendem Link:
        https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active.
      </p>

      <h2>6. Plugins und Tools</h2>
      <h3>Google Fonts (lokales Hosting)</h3>
      <p>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
        genannte Google Fonts, die von Google bereitgestellt werden. Die Google
        Fonts sind lokal installiert. Eine Verbindung zu Servern von Google
        findet dabei nicht statt.
      </p>
      <p>
        Weitere Informationen zu Google Fonts finden Sie unter
        https://developers.google.com/fonts/faq und in der Datenschutzerklärung
        von Google: https://policies.google.com/privacy?hl=de.
      </p>
      <p>Quelle: https://www.e-recht24.de</p>
    </>
  );
}

function EnglishPrivacy() {
  return (
    <>
      <h2>1. Data protection at a glance</h2>
      <h3>General information</h3>
      <p>
        The following information provides a simple overview of what happens to
        your personal data when you visit this website. Personal data is any data
        with which you can be personally identified. Detailed information on data
        protection can be found in our privacy policy set out below this text.
      </p>

      <h3>Data collection on this website</h3>
      <h3>Who is responsible for data collection on this website?</h3>
      <p>
        The data processing on this website is carried out by the website
        operator. Their contact details can be found in the section “Information
        about the responsible party” in this privacy policy.
      </p>

      <h3>How do we collect your data?</h3>
      <p>
        On the one hand, your data is collected by you providing it to us. This
        can, for example, be data that you enter into a contact form.
      </p>
      <p>
        Other data is collected automatically or after your consent when you
        visit the website by our IT systems. This is mainly technical data (e.g.
        internet browser, operating system or time of page access). This data is
        collected automatically as soon as you enter this website.
      </p>

      <h3>What do we use your data for?</h3>
      <p>
        Part of the data is collected to ensure the error-free provision of the
        website. Other data can be used to analyze your user behavior.
      </p>

      <h3>What rights do you have regarding your data?</h3>
      <p>
        You have the right at any time to receive free information about the
        origin, recipient and purpose of your stored personal data. You also have
        the right to request the rectification or deletion of this data. If you
        have given consent to data processing, you may revoke this consent at any
        time with effect for the future. Furthermore, you have the right, under
        certain circumstances, to request the restriction of the processing of
        your personal data. You also have the right to lodge a complaint with the
        competent supervisory authority.
      </p>
      <p>
        You can contact us at any time regarding this and other questions on the
        subject of data protection.
      </p>

      <h2>2. Hosting</h2>
      <p>We host the content of our website with the following provider:</p>
      <h3>Squarespace</h3>
      <p>
        The provider is Squarespace Ireland Ltd., Le Pole House, Ship Street
        Great, Dublin 8, Ireland (hereinafter “Squarespace”).
      </p>
      <p>
        Squarespace is a tool for creating and hosting websites. When you visit
        our website, your data is processed on Squarespace’s servers. In this
        context, personal data may also be transferred to Squarespace’s parent
        company, Squarespace Inc., 8 Clarkson St, New York, NY 10014, USA.
        Squarespace also stores cookies that are required for the display of the
        site and to ensure security (necessary cookies).
      </p>
      <p>
        The use of Squarespace is based on Art. 6(1)(f) GDPR. We have a
        legitimate interest in the most reliable presentation possible of our
        website. Insofar as a corresponding consent has been requested, the
        processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR
        and § 25(1) TDDDG, insofar as the consent covers the storage of cookies
        or access to information on the user’s end device (e.g. device
        fingerprinting) within the meaning of the TDDDG. Consent can be revoked
        at any time.
      </p>
      <p>
        The transfer of data to the USA is based on the standard contractual
        clauses of the EU Commission. Details can be found here:
        https://support.squarespace.com/hc/de/articles/360000851908-DSGVO-und-Squarespace.
      </p>
      <p>
        The company is certified under the “EU-US Data Privacy Framework” (DPF).
        The DPF is an agreement between the European Union and the USA intended
        to ensure compliance with European data protection standards for data
        processing in the USA. Every company certified under the DPF undertakes
        to comply with these data protection standards. Further information is
        available from the provider at:
        https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnjcAAC&status=Active.
      </p>

      <h2>3. General information and mandatory information</h2>
      <h3>Data protection</h3>
      <p>
        The operators of these pages take the protection of your personal data
        very seriously. We treat your personal data confidentially and in
        accordance with statutory data protection regulations and this privacy
        policy.
      </p>
      <p>
        When you use this website, various personal data is collected. Personal
        data is data by which you can be personally identified. This privacy
        policy explains which data we collect and what we use it for. It also
        explains how and for what purpose this is done.
      </p>
      <p>
        We point out that data transmission on the internet (e.g. when
        communicating by e-mail) can have security gaps. Complete protection of
        data against access by third parties is not possible.
      </p>

      <h3>Information about the responsible party</h3>
      <p>The responsible party for data processing on this website is:</p>
      <p>Raymond Bertram</p>
      <p>21244 Buchholz</p>
      <p>E-mail: contact@bertram-tech.de</p>
      <p>
        The responsible party is the natural or legal person who alone or jointly
        with others decides on the purposes and means of processing personal data
        (e.g. names, e-mail addresses, etc.).
      </p>

      <h3>Storage duration</h3>
      <p>
        Unless a more specific storage period is stated within this privacy
        policy, your personal data will remain with us until the purpose for data
        processing no longer applies. If you assert a justified request for
        deletion or revoke your consent to data processing, your data will be
        deleted, provided we have no other legally permissible reasons for
        storing your personal data (e.g. tax or commercial law retention
        periods); in the latter case, deletion will take place after these
        reasons no longer apply.
      </p>

      <h3>General information on the legal bases of data processing on this website</h3>
      <p>
        If you have consented to data processing, we process your personal data
        on the basis of Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special
        categories of data pursuant to Art. 9(1) GDPR are processed. In the case
        of explicit consent to the transfer of personal data to third countries,
        the data processing is also based on Art. 49(1)(a) GDPR. If you have
        consented to the storage of cookies or access to information in your end
        device (e.g. via device fingerprinting), the data processing is
        additionally based on § 25(1) TDDDG. Consent can be revoked at any time.
        If your data is required for the performance of a contract or for the
        implementation of pre-contractual measures, we process your data on the
        basis of Art. 6(1)(b) GDPR. Furthermore, we process your data if this is
        necessary to fulfill a legal obligation on the basis of Art. 6(1)(c)
        GDPR. Data processing may also be based on our legitimate interest
        pursuant to Art. 6(1)(f) GDPR. The relevant legal bases in each
        individual case are explained in the following paragraphs of this privacy
        policy.
      </p>

      <h3>Recipients of personal data</h3>
      <p>
        As part of our business activities, we work with various external
        parties. In some cases, this also requires the transfer of personal data
        to these external parties. We only pass on personal data to external
        parties if this is necessary within the framework of contract fulfillment,
        if we are legally obliged to do so (e.g. transfer of data to tax
        authorities), if we have a legitimate interest in the transfer pursuant
        to Art. 6(1)(f) GDPR or if another legal basis permits the transfer of
        data. When using processors, we only pass on personal data of our
        customers on the basis of a valid data processing agreement. In the case
        of joint processing, a joint controller agreement is concluded.
      </p>

      <h3>Revocation of your consent to data processing</h3>
      <p>
        Many data processing operations are only possible with your explicit
        consent. You can revoke consent you have already given at any time. The
        lawfulness of the data processing carried out until the revocation
        remains unaffected by the revocation.
      </p>

      <h3>Right to object to data collection in special cases and to direct advertising (Art. 21 GDPR)</h3>
      <p>
        IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE
        RIGHT AT ANY TIME, FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION, TO
        OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO
        PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH
        PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT,
        WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN
        DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH
        OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES THE
        ASSERTION, EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO
        ART. 21(1) GDPR).
      </p>
      <p>
        IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU
        HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF PERSONAL DATA
        CONCERNING YOU FOR SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING,
        INSOFAR AS IT IS ASSOCIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT,
        YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT
        MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).
      </p>

      <h3>Right to lodge a complaint with the competent supervisory authority</h3>
      <p>
        In the event of violations of the GDPR, data subjects have a right to
        lodge a complaint with a supervisory authority, in particular in the
        Member State of their habitual residence, their place of work or the
        place of the alleged violation. The right to lodge a complaint exists
        without prejudice to other administrative or judicial remedies.
      </p>

      <h3>Right to data portability</h3>
      <p>
        You have the right to have data which we process automatically on the
        basis of your consent or in fulfillment of a contract handed over to you
        or to a third party in a commonly used, machine-readable format. If you
        request the direct transfer of the data to another controller, this will
        only be done insofar as it is technically feasible.
      </p>

      <h3>Access, rectification and deletion</h3>
      <p>
        Within the framework of the applicable statutory provisions, you have the
        right at any time to free access to your stored personal data, its origin
        and recipients and the purpose of the data processing and, if applicable,
        a right to rectification or deletion of this data. You can contact us at
        any time regarding this and other questions on the subject of personal
        data.
      </p>

      <h3>Right to restriction of processing</h3>
      <p>
        You have the right to request the restriction of the processing of your
        personal data. You can contact us about this at any time. The right to
        restriction of processing exists in the following cases:
      </p>
      <ul>
        <li>
          If you dispute the accuracy of your personal data stored by us, we
          usually need time to verify this. For the duration of the review, you
          have the right to request the restriction of the processing of your
          personal data.
        </li>
        <li>
          If the processing of your personal data happened/is happening
          unlawfully, you can request the restriction of data processing instead
          of deletion.
        </li>
        <li>
          If we no longer need your personal data, but you need it for the
          exercise, defense or assertion of legal claims, you have the right to
          request the restriction of the processing of your personal data instead
          of deletion.
        </li>
        <li>
          If you have lodged an objection pursuant to Art. 21(1) GDPR, a balance
          must be made between your interests and ours. As long as it has not yet
          been determined whose interests prevail, you have the right to request
          the restriction of the processing of your personal data.
        </li>
      </ul>
      <p>
        If you have restricted the processing of your personal data, this data –
        apart from its storage – may only be processed with your consent or for
        the assertion, exercise or defense of legal claims or for the protection
        of the rights of another natural or legal person or for reasons of
        important public interest of the European Union or a Member State.
      </p>

      <h3>SSL or TLS encryption</h3>
      <p>
        For security reasons and to protect the transmission of confidential
        content, such as orders or inquiries that you send to us as the site
        operator, this site uses SSL or TLS encryption. You can recognize an
        encrypted connection by the fact that the browser’s address line changes
        from “http://” to “https://” and by the lock symbol in your browser line.
      </p>
      <p>
        If SSL or TLS encryption is activated, the data you transmit to us cannot
        be read by third parties.
      </p>

      <h3>Objection to advertising e-mails</h3>
      <p>
        The use of contact data published within the scope of the legal notice
        obligation for the purpose of sending unsolicited advertising and
        information material is hereby rejected. The operators of the pages
        expressly reserve the right to take legal action in the event of the
        unsolicited sending of advertising information, for example through spam
        e-mails.
      </p>

      <h2>4. Data collection on this website</h2>
      <h3>Contact form</h3>
      <p>
        If you send us inquiries via the contact form, your details from the
        inquiry form, including the contact data you provide there, will be
        stored by us for the purpose of processing the inquiry and in case of
        follow-up questions. We do not pass on this data without your consent.
      </p>
      <p>
        The processing of this data is based on Art. 6(1)(b) GDPR, provided that
        your request is related to the performance of a contract or is necessary
        for the implementation of pre-contractual measures. In all other cases,
        processing is based on our legitimate interest in the effective handling
        of inquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art.
        6(1)(a) GDPR) if this has been requested; consent can be revoked at any
        time.
      </p>
      <p>
        The data you enter in the contact form will remain with us until you ask
        us to delete it, revoke your consent to storage or the purpose for data
        storage no longer applies (e.g. after your inquiry has been processed).
        Mandatory statutory provisions – in particular retention periods – remain
        unaffected.
      </p>

      <h3>Inquiry by e-mail, telephone or fax</h3>
      <p>
        If you contact us by e-mail, telephone or fax, your inquiry, including
        all personal data arising from it (name, inquiry), will be stored and
        processed by us for the purpose of handling your request. We do not pass
        on this data without your consent.
      </p>
      <p>
        The processing of this data is based on Art. 6(1)(b) GDPR if your inquiry
        is related to the performance of a contract or is necessary for the
        implementation of pre-contractual measures. In all other cases,
        processing is based on our legitimate interest in the effective handling
        of inquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art.
        6(1)(a) GDPR) if this has been requested; consent can be revoked at any
        time.
      </p>
      <p>
        The data you send us via contact inquiries will remain with us until you
        ask us to delete it, revoke your consent to storage or the purpose for
        data storage no longer applies (e.g. after your request has been
        processed). Mandatory statutory provisions – in particular statutory
        retention periods – remain unaffected.
      </p>

      <h2>5. Social media</h2>
      <h3>Instagram</h3>
      <p>
        Functions of the Instagram service are integrated on this website. These
        functions are offered by Meta Platforms Ireland Limited, Merrion Road,
        Dublin 4, D04 X2K5, Ireland.
      </p>
      <p>
        If the social media element is active, a direct connection is established
        between your device and the Instagram server. Instagram thus receives
        information that you have visited this website.
      </p>
      <p>
        If you are logged into your Instagram account, you can link the contents
        of this website to your Instagram profile by clicking the Instagram
        button. This allows Instagram to associate the visit to this website with
        your user account. We would like to point out that, as the provider of
        these pages, we have no knowledge of the content of the transmitted data
        or of its use by Instagram.
      </p>
      <p>
        The use of this service is based on your consent pursuant to Art. 6(1)(a)
        GDPR and § 25(1) TDDDG. Consent can be revoked at any time.
      </p>
      <p>
        Insofar as personal data is collected on our website with the aid of the
        tool described here and forwarded to Facebook or Instagram, we and Meta
        Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
        Dublin 2, Ireland, are jointly responsible for this data processing (Art.
        26 GDPR). Joint responsibility is limited to the collection of the data
        and its transfer to Facebook or Instagram. The subsequent processing by
        Facebook or Instagram is not part of the joint responsibility. The
        obligations incumbent on us jointly have been set out in an agreement on
        joint processing. The wording of this agreement can be found at:
        https://www.facebook.com/legal/controller_addendum. According to this
        agreement, we are responsible for providing data protection information
        when using the Facebook or Instagram tool and for implementing the tool
        in a manner compliant with data protection law on our website. Facebook
        is responsible for the data security of the Facebook or Instagram
        products. You can assert data subject rights (e.g. access requests) with
        regard to the data processed by Facebook or Instagram directly with
        Facebook. If you assert data subject rights with us, we are obliged to
        forward them to Facebook.
      </p>
      <p>
        The transfer of data to the USA is based on the standard contractual
        clauses of the EU Commission. Details can be found here:
        https://www.facebook.com/legal/EU_data_transfer_addendum,
        https://privacycenter.instagram.com/policy/ and
        https://de-de.facebook.com/help/566994660333381.
      </p>
      <p>
        Further information can be found in Instagram’s privacy policy:
        https://privacycenter.instagram.com/policy/.
      </p>
      <p>
        The company is certified under the “EU-US Data Privacy Framework” (DPF).
        The DPF is an agreement between the European Union and the USA intended
        to ensure compliance with European data protection standards for data
        processing in the USA. Every company certified under the DPF undertakes
        to comply with these data protection standards. Further information is
        available at:
        https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active.
      </p>

      <h2>6. Plugins and tools</h2>
      <h3>Google Fonts (local hosting)</h3>
      <p>
        This site uses so-called Google Fonts for the uniform display of fonts,
        which are provided by Google. The Google Fonts are installed locally.
        There is no connection to Google’s servers.
      </p>
      <p>
        Further information on Google Fonts can be found at
        https://developers.google.com/fonts/faq and in Google’s privacy policy:
        https://policies.google.com/privacy?hl=de.
      </p>
      <p>Source: https://www.e-recht24.de</p>
    </>
  );
}
