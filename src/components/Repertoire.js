import '../App.css';

const Repertoire = () => {
    return (
        <div>
            <h2>Recommended Repertoire for Trombone</h2>
            <h3 className="title">Unaccompanied/Accompanied Solo Works:</h3>
            <ul style={{listStyleImage: `url('${process.env.PUBLIC_URL}/trombone-icon-32.ico')`}}>
                <li>Johann Albrechtsberger, Concerto for Alto Trombone & Strings</li>
                <li>David Amram, Trombone Alone</li>
                <li>Malcolm Arnold, Fantasy for Trombone</li>
                <li>J. Ed. Barat, Andante & Allegro</li>
                <li>Guy Ropartz, Andante & Allegro</li>
                <li>G. Alary, Contest Piece</li>
                <li>Serge Baudo, Petite Suite for Trombone</li>
                <li>Leonard Bernstein, Elegy for Mippy II</li>
                <li>Derek Bourgeois, Sonata for Trombone and Piano</li>
                <li>Henri Busser, Etude de Concert</li>
                <li>Paul Creston, Fantasy for Trombone & Orchestra</li>
                <li>Ferdinand David, Concertino</li>
                <li>Gottfried Finger, Sonata in Eb</li>
                <li>Launy Grondahl, Concerto for Trombone & Piano</li>
                <li>Alexandre Guilmant, Morceau Symphonique</li>
                <li>Frigyes Hidas, Fantasia for Trombone</li>
                <li>Paul Hindemith, Sonata for Trombone & Piano</li>
                <li>Lars-Erik Larsson, Concertino</li>
                <li>Frank Martin, Ballade</li>
                <li>Darius Milhaud, Concertino d’Hiver</li>
                <li>Nicolai Rimsky-Korsakov, Trombone Concerto</li>
                <li>Nino Rota, Concerto for Trombone & Orchestra</li>
                <li>Camille Saint-Saens, The Swan</li>
                <li>Robert Schumann, 3 Romances</li>
                <li>William Grant Still, Romance for Trombone & Piano</li>
                <li>Stjepan Sulek, Sonata (Vox Gabrieli)</li>
                <li>Georg Philipp Telemann, Sonata in F minor</li>
                <li>Galliard, Marcello, and Vivaldi Sonatas</li>
            </ul>
            <h3 className="title">Etudes and Method Books:</h3>
            <ul style={{listStyleImage: `url('${process.env.PUBLIC_URL}/trombone-icon-32.ico')`}}>
                <li>Arban, Method for Trombone</li>
                <li>The Unaccompanied Bach Cello Suites</li>
                <li>Bitsch, Etudes de Rythme pour Trombone</li>
                <li>Blazhevich, Clef Studies</li>
                <li>Blume, 36 Studies</li>
                <li>Bona, Rhythmical Articulation</li>
                <li>Michael Davis, Total Trombone: 13 Etudes </li>
                <li>Brad Edwards, Lip Slurs</li>
                <li>Fink, Studies in Legato</li>
                <li>Fink, Introducing the Tenor Clef & Alto Clef</li>
                <li>Kopprasch, 60 Studies Books 1 and 2</li>
                <li>Maxted Studies</li>
                <li>Remington Warm-up Studies</li>
                <li>Rochut/Bordogni, Books 1-3</li>
                <li>Rubank Elementary, Intermediate & Advanced Method</li>
                <li>Telemann Fantasies</li>
                <li>Tyrell, 40 Progressive Studies</li>
                <li>Voxman Studies</li>
                <li>Keith Brown, Orchestral Excerpts for Trombone, Books 1-10</li>
                <li>Orchester-Probespiel for Trombone</li>
            </ul>
            <h3 className="title">Duets:</h3>
            <ul style={{listStyleImage: `url('${process.env.PUBLIC_URL}/trombone-icon-32.ico')`}}>
                <li>Bach J.S., Two-Part Inventions</li>
                <li>Blazhevich, Duets</li>
                <li>Bower, Bop Duets</li>
                <li>Clarke, H., Cousins</li>
                <li>Ostrander A., Virtuoso Studies for Two Trombones</li>
                <li>Small C., Conversations</li>
                <li>Story, M., Pop Duets For All</li>
                <li>Telemann, Canonic Sonatas</li>
                <li>David Vining, Dueling Fundamentals</li>
                <li>Voxman Duets, Volume I & II</li>
            </ul>
        </div>
    )
}

export default Repertoire;