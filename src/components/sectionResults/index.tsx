'use client';
import Image from "next/image";
import styles from "./components.module.css";

export default function SectionResultsComponent() {
  return (
    <>
      <section id="section-results" className={styles.results}>
        <div className={styles.containerResults}>
          <div className={styles.resultsLeft}>
            <h2 className={styles.titleResultsLeft}>Resultados</h2>
            <p className={styles.subTitleResultsLeft}>Garçom Web é essencial para o seu negócio.</p>

            <iframe
              width="520"
              height="300"
              src="https://www.youtube.com/embed/b17jGKnTqSU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <p className={styles.titleList}>Confira cases de sucesso por segmento:</p>
            <ul className={styles.listResults}>
              <li >Cervejaria</li>
              <li>Nutrição</li>
              <li>Mercado</li>
              <li>Pizzaria</li>
              <li>Temakeria</li>
            </ul>

          </div>
          <div className={styles.resultsRight}>
            <h3>Transformamos os dados coletados em oportunidades de alavancar mais vendas.</h3>
            <div className={styles.listRightIcons}>
              <p><Image src="/frequencia.svg" alt="icon" width={56} height={56} /> Aumentamos sua frequência de visita</p>
              <p><Image src="/recuperamos.svg" alt="icon" width={56} height={56} />Recuperamos os clientes perdidos</p>
              <p><Image src="/ticket.svg" alt="icon" width={56} height={56} />Aumentamos seu ticket médio</p>
              <p><Image src="/marketing.svg" alt="icon" width={56} height={56} />Reduzimos seu gasto com marketing</p>
            </div>
          </div>

        </div>
        <div className={styles.containerButtonsResults}>
          <button className={styles.buttonsResults}>FALE COM UM CONSULTOR</button>
          <button className={styles.buttonsResults}>VER APRESENTAÇÃO NO WHATSAPP</button>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/stardiv.svg" alt="resultados" layout="responsive" width={1920} height={40.80} className={styles.imageDiv} />
        </div>

        <div className={styles.containerValue}>
          <h2>Nossa plataforma já ajudou nossos clientes a recuperarem mais de:</h2>
          <span>R$650.000.000,00</span>
        </div>

        <div className={styles.cardsResults}>
          <div className={styles.cardResults}>
            <h4>Resultado entregue a mais que qualquer software ou aplicativo do mercado</h4>
            <h3>200% Maior</h3>
          </div>
          <div className={styles.cardResults}>
            <h4>Programas de Fidelidade implementados em todo
              o Brasil</h4>
            <h3>Mais de 3.000</h3>
          </div>
          <div className={styles.cardResults}>
            <h4>Estabelecimentos com clientes fidelizados tendo gasto mensal superior a clientes novos</h4>
            <h3>Até 2.500% Maior</h3>
          </div>
        </div>
        <div className={styles.containerSecondButton}>
          <button className={styles.buttonsResults}>FALE COM UM CONSULTOR</button>
        </div>
      </section>

      <div className={styles.divContainer}></div>

      <section id="section-calc" className={styles.calc}>
        <div className={styles.containerCalc}>
          <h2>Calcule a receita potencial adicional que o seu negócio pode recuperar com o Garçom web</h2>
          <div className={styles.cardsCalc}>
            <div className={styles.cardCalc}>
              <h4>Qual o número de vendas realizadas por mês?</h4>
              <input placeholder="1000" />
            </div>
            <div className={styles.cardCalc}>
              <h4>Quanto seus clientes gastam em média por compra?</h4>
              <input placeholder="R$ 50,00" />
            </div>
            <div className={styles.cardCalc}>
              <h4>Qual o segmento da sua empresa?</h4>
              <select>
                <option value="pizzaria">Pizzaria</option>
                <option value="lanchonete">Lanchonete</option>
                <option value="a_larte">A Larte</option>
                <option value="churrascaria">Churrascaria</option>
                <option value="hamburgueria">Hamburgueria</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.containerSecondButton}>
          <button className={styles.buttonsResults}>Calcular</button>
        </div>
      </section>
    </>
  );
}
