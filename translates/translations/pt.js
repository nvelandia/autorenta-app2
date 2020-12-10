import React from 'react';

export const pt = {
  locale: 'pt',
  messages: {
    common: {
      error: {
        attention: 'Atenção!',
        idInvalid: 'O número de ID inserido não é válido.',
        couponORCodeInvalid: 'O número do cupom ou código promocional não é válido.',
        clientType: 'O tipo de cliente não foi selecionado.',
        formStep2: 'Os campos marcados em vermelho são de preenchimento obrigatório.',
        reservationNotFound: 'Nenhuma reserva foi encontrada com esses dados.',
        airlineIata: 'Você deve selecionar uma companhia aérea.',
        airlineFlight: 'Você deve completar o número do voo.',
        completeAllFields: 'Todos os campos são obrigatórios.',
        invalidEmail: 'O endereço de e-mail não é válido.',
        canNotPay: 'A reserva não pôde ser paga.',
      },
      validationMessages: {
        codePromotionalSuccess: 'O código promocional inserido foi aplicado corretamente na reserva.',
        couponNumberSuccess: 'O número do cupom inserido foi corretamente aplicado na reserva.',
        reservationCancelled: 'Sua reserva foi cancelada',
        subscriptionSuccess: 'Você se inscreveu corretamente em nosso banco de dados.',
      },
      navbar: {
        button: {
          reserve: 'Reservar',
        },
        links: {
          promotions: 'Promoções',
          searchReservation: 'Procurar reserva',
          travelAgency: 'Agentes de viagem',
          AutoRentaBusiness: 'AutoRenta Business',
          AutoRentaOnTheGo: 'AutoRenta ON THE GO',
        },
      },
      banner: {
        text: 'Você já conhece o nosso novo App? Faça o download para iPhone e Android',
      },
      footer: {
        subscribe: 'Inscreva-se e receba todas as nossas ofertas',
        fullName: 'Nome e Sobrenome',
        email: 'Endereço de e-mail',
        register: 'Cadastre-se ',
        contactUs: 'Fale Conosco',
        sawgrass: '1580 Sawgrass Corporate Parkway',
        suite: 'Suite 130, Sunrise, FL 33323',
        info: 'info@autorenta.com',
        clientAttention: 'Atendimento ao cliente',
        adviser: 'Contate um assessor online',
        faq: 'Perguntas frequentes',
        searchReservation: 'Procurar reserva',
        affiliates: 'Afiliados',
        access: 'Acesse sua conta',
        registerAccount: 'Criar uma conta',
        promotions: 'Promoções vigentes',
        aboutUs: 'Acerca de Autorenta',
        politics: 'Política de cancelamento',
        terms: 'Termos e Condições',
        privacy: 'Política de Privacidade',
        copyRight: 'Copyright © 2020 autorenta.com é uma marca registrada de GMS. Todos os direitos reservados',
      },
      loader: {
        searching: 'Estamos procurando as melhores ofertas de veículos para as datas estabelecidas.',
        cancel: 'Estamos cancelando sua reserva, por favor não feche a janela.',
        creating: 'Estamos criando sua reserva, espere um momento.',
        booking: 'Estamos procurando sua reserva.',
        paying: 'Estamos processando o pagamento de sua reserva, por favor não feche a janela.',
      },
      progressBar: {
        startYourSearch: 'Iniciar sua pesquisa',
        chooseYourPlan: 'Escolha o seu plano',
        confirmYourSearch: 'Confirme sua reserva',
      },
      searchReservationModal: {
        title: 'Procurar uma reserva',
        id: 'ID da agência ou corporativo',
        checkbox: 'Eu sou uma Agência de Viagens ou Cliente Corporativo',
      },
    },
    home: {
      googleModal: {
        title: 'Encontrar uma loja ou local',
        button: 'PROCURAR NA ÁREA',
        notFoundTitle: 'Atenção',
        notFound1: 'No local selecionado não foi encontrada uma loja de aluguel.',
        notFound2: 'Por favor, tente novamente, modificando os parâmetros de busca.',
        distance: 'Distância: ',
        officeCode: 'Código da loja: ',
        extendedOfficeCode: 'Código estendido: ',
      },
      makeYourReservation: {
        doYourReservationIn: 'Faça sua reserva em',
        only3Steps: 'apenas 3 passos',
        placeToPickUp: 'Onde você deseja pegar o veículo?',
        placeToDropOff: 'Onde você quer entregar o veículo?',
        country: 'País de residência',
        age: 'Idade',
        carType: 'Tipo de veículo',
        search: 'Procurar',
        dateToPickUp: 'Data e hora de retirada',
        dateToDropOff: 'Data e hora de devolução',
        findOnMap: 'Encontrar uma loja ou local no mapa',
        years: 'anos',
      },
      offers: {
        mainTitle: 'Confira todas as ofertas e promoções',
        mainTitleMobile: 'Ofertas e promoções',
        button: 'Mais informações',
      },
    },
    step1: {
      resultMessage:
        'Desculpe, mas não encontramos nenhum resultado para a busca solicitada. Por favor, tente novamente.',
      activeSearch: {
        title: 'Busca ativa',
        age: 'Idade: ',
        years: ' anos',
        modify: 'Modificar',
        modifyModal: {
          title: 'Modificar a busca',
        },
      },
      result: {
        showFirst: 'Mostrar primeiro os veículos em destaque',
        orderBy: 'Ordenar por',
        minToMax: 'Do menor ao maior preço',
        maxToMin: 'Do maior ao menor preço',
        carsResult: {
          orSimilar: 'ou similar',
          seats: 'lugares',
          doors: 'portas',
          bigBags: 'malas grandes',
          smallBags: 'malas pequenas',
          gear: 'Transmissão',
          air: 'Ar-condicionado',
          featured: 'Destaque!',
          cancel: 'Cancele gratuitamente sua reserva com 48 horas de antecedência.',
          advise: 'Algumas locadoras cobram uma taxa extra para motoristas menores de 25.',
          additionalInformation: 'Informações adicionais',
          seeDetails: 'Ver detalhes do plano',
          reserveNow: 'Reservar agora',
        },
        filterList: {
          mainTitle: 'Filtrar os resultados',
          companies: 'EMPRESA DE LOCAÇÃO',
          types: 'TIPOS DE VEÍCULO',
          seats: 'QUANTIDADE DE PASSAGEIROS',
          bags: 'CAPACIDADE DE BAGAGEM',
          gears: 'TIPO DE TRANSMISSÃO',
          price: 'FAIXA DE PREÇOS',
          moreBags: '  ou mais malas',
        },
        modalDetailInformation: {
          title: 'Veja detalhes desta tarifa',
          subtitle: 'Código da tarifa:',
        },
        modalAdditionalInformation: {
          title: 'Informação importante',
          secureTitle: 'Seguros e coberturas',
          secureText:
            'Todos os veículos são oferecidos com uma cobertura básica que implica uma franquia e o\n' +
            'bloqueio de um determinado valor no cartão de crédito do cliente como depósito ou garantia.',
          franTitle: 'Franquia',
          franText:
            'A franquia é o valor máximo que o cliente deve pagar em caso de danos ao\n' +
            'veículo. Algumas empresas de locação oferecem cobertura total para recuperar o valor da franquia,\n' +
            'mas isso não impede o depósito ou a garantia',
          depoTitle: 'Depósito ou bloqueio',
          depoText:
            'O depósito é o bloqueio de um determinado valor no cartão de crédito do cliente, no caso de\n' +
            'danos ou qualquer outra reclamação. O bloqueio só pode ser reduzido com a contratação de um seguro adicional na\n' +
            'empresa de locação, dependendo do destino.',
          poliTitle: 'Políticas de combustível',
          poliText:
            'Cada empresa tem sua própria política de combustível. A maioria das locadoras entrega o\n' +
            'veículo com um tanque cheio e o cliente deve devolvê-lo da mesma forma. No caso de não\n' +
            'fazê-lo será cobrada uma taxa adicional de reabastecimento.',
          kiloTitle: 'Quilometragem / Milhagem',
          kiloText:
            'Na maioria dos casos, a taxa contratada incluirá quilometragem /milhagem ilimitada, no\n' +
            'entanto, para alguns dos veículos ou regiões específicas, há um limite de quilômetros ou milhas,\n' +
            'além desse limite, o cliente deve pagar um custo adicional por quilômetro / milha.',
          cardTitle: 'Cartão de crédito e débito',
          cardText:
            'A maioria das locadoras exige um cartão de crédito em nome do motorista\n' +
            'principal para realizar uma pré-autorização. Os cartões de débito não serão aceitos como forma de pagamento\n' +
            'ou depósito / bloqueio.',
        },
      },
    },
    step2: {
      details: {
        optionalEquipment: 'Total do equipamento opcional',
        baseFee: 'Tarifa base',
        totalFee: 'Total de impostos e taxas',
        title: 'Detalhes da reserva',
        selectedPlan: 'PLANO SELECIONADO',
        changePlan: 'Troca de Plano',
        feeCode: 'Código de tarifa: ',
        additionalEquipment: 'EQUIPAMENTO ADICIONAL SOLICITADO',
        chargesDetail: 'DETALHES DE TAXAS',
        estimatedTotal: 'TOTAL ESTIMADO',
        text1:
          'Lembre-se que é necessário apresentar um cartão de crédito internacional válido em nome do locatário ao ' +
          'retirar o veículo da empresa locadora.',
        text2:
          'Algumas empresas de locação podem aplicar taxas e restrições para motoristas com menos de 18 anos de idade ' +
          'mínima.',
        text3:
          'Os impostos e as taxas mencionadas NÃO estão incluídos na Tarifa base, alguns deles só podem ser ' +
          'pagos no destino.',
        agree: 'Li e aceito os termos e condições em vigor no país de destino do aluguel.',
        confirm: 'Confirmar a reserva',
      },
      carSelected: {
        orSimilar: 'ou similar',
        seats: 'lugares',
        doors: 'portas',
        bigBags: 'malas grandes',
        smallBags: 'malas pequenas',
        gear: 'Transmissão',
        air: 'Ar-condicionado',
        featured: 'Destaque!',
        cancel: 'Cancele gratuitamente sua reserva com 48 horas de antecedência.',
        advise: 'Algumas locadoras cobram uma taxa extra para motoristas menores de 25.',
        additionalInformation: 'Informações adicionais',
        seeDetails: 'Ver detalhe do plano',
        reserveNow: 'Reservar agora',
      },
      clientType: {
        title: 'Tipo de cliente',
        passenger: 'Passageiro / Cliente direto',
        agency: 'Agência de viagens',
        corporation: 'Corporativo / Empresas',
        choose: 'Selecione uma opção',
        validate: 'Validar',
        typeYourId: 'Insira seu número de ID',
      },
      passenger: {
        email: 'E-mail',
      },
      agencyOrCorporation: {
        title: 'informação do passageiro',
        subtitle: 'Informações pessoais do locatário',
        name: 'Nome',
        surname: 'Sobrenome',
        phone: 'Telefone (opcional)',
        flyCompany: 'Companhia aérea (opcional)',
        flyNumber: 'Número de voo (opcional)',
        additionalInformation: 'informações adicionais',
        promotionalCode: 'Código promocional',
        coupon: 'Número do cupom',
      },
      optionalEquipment: {
        title: 'Adicione equipamentos opcionais ao seu aluguel',
        titleMobile: 'Adicione equipamento opcional',
        text:
          'Equipamento opcional não pode ser reservado, somente será solicitado à empresa locadora e será ' +
          'confirmado e pago na loja de início de locação. Seu custo não está incluído no preço pré-pago desta ' +
          'reserva e será mostrado um preço estimado como orientação podendo ser alterado sem aviso prévio.',
        perDay: '(por dia)',
        GPS: 'Navegador satelital',
        babySeat: 'Cadeira para bebês',
        childrenSeat: 'Cadeira para crianças',
        elevatorSeat: 'Assento elevatório para crianças',
        elevatorSeatMobile: 'Assento elevatório',
      },
      changePlan: {
        title: 'Trocar plano de tarifa',
        quoteFee: 'Cotar esta tarifa',
        selectedFee: 'Tarifa selecionada',
      },
    },
    step3: {
      agencyOrOrganizationPayment: {
        reservationValue: 'Valor total de locação:',
        discount: 'Desconto AutoRenta (só pré-pagamento):',
        commission: 'Comissão da Agência (só pré-pagamento):',
        neto: 'Valor net a pagar (só pré-pagamento):',
        titleReservation1: 'Pagar esta reserva com cartão de crédito',
        titleReservation2: 'O voucher e a fatura serão enviados por e-mail e carregados em seu perfil de usuário.',
        choose: 'Selecione a forma de pagamento:',
        next: 'Seguinte',
        bankTitle: 'Para pagar por transferência bancária',
        bankSubtitle: 'Faça um depósito ou transferência à seguinte conta bancária.',
        bank: 'Banco: ',
        accountNumber: 'Número da conta: ',
        routeNumber: 'Giros Digitais: ',
        deposit: 'Depósito direto: ',
        swift: 'SWIFT: ',
        message: 'Depois, envie o recibo eletrônico por e-mail para:',
      },
      payment: {
        titleReservation: 'Pague esta reserva com seu cartão de crédito',
        subtitleReservation1: 'Pague agora e receba um desconto de ',
        subtitleReservation2: ' na Tarifa base desta reserva!',
        choose: 'Favor selecionar a forma de pagamento para esta reserva:',
        creditCard: 'Pagar com Cartão de Crédito / Débito',
        next: 'Seguinte',
        creditCardPayment: {
          cardNumber: 'Número do cartão de crédito',
          country: 'País',
          cvc: 'CVC (código de Segurança)',
          cvcMobile: 'Código de Segurança',
          expirationDate: 'MM/AA',
          postalCode: 'Código postal',
          payNow: 'Pague agora esta reserva',
          payNow2: 'Pague agora',
          back: 'Voltar',
        },
        account: 'Digite os dados de sua conta',
        email: 'Endereço de e-mail',
        password: 'Senha',
        login: 'Login',
        back: 'Voltar',
        payOk: 'Pagamento com sucesso!',
        text1: 'Para pagar esta reserva no destino (POD)',
        text2: 'Dirija-se à loja da empresa locadora e mencione o número desta reserva',
        text3:
          'O motorista deve apresentar uma carteira de habilitação válida e um cartão de crédito internacional em seu ' +
          'nome ao pegar o veículo no qual, a locadora fará o bloqueio ' +
          'correspondente como garantia.',
        reservationNumber: 'Apresente o número de reserva na loja:',
      },
      reservationState: {
        cancelReservationModal: {
          title: 'Cancelar uma reserva',
          subtitle:
            'Atenção! Está pronto a cancelar sua reserva. Deseja continuar? \n' +
            'Uma vez cancelada, não é possível desfazer esta ação.',
          lastname: 'Sobrenome do passageiro',
          reservationNumber: 'Número da reserva Autorenta',
          email: 'Endereço de E-mail',
          agency: 'ID da Agência de viagens',
          corporation: 'ID Corporativo',
          cancel: 'Cancelar esta reserva',
        },
        titleReservation: 'A reserva foi feita corretamente!',
        textReservation:
          'Consulte abaixo as opções de pagamento que oferecemos para esta reserva \n' + 'ou ligue para nós: ',
        titlePayment: 'Você pagou sua reserva corretamente!',
        textPayment1: 'Cobramos ',
        textPayment2: ' para o cartão terminado em ',
        textPayment25:
          'Lembre-se que os impostos e as taxas, além do equipamento adicional necessário, devem ser pagos na chegada às lojas da locadora no início da locação.',
        textPayment26:
          'Lembre-se que os impostos e as taxas, além do equipamento adicional necessário, devem ser pagos na chegada às lojas da locadora no início da locação.',
        textPayment3: '. Conseguiu um desconto de ',
        textPayment4: 'Daqui a pouco lhe enviaremos a fatura e o voucher correspondente',
        subtitle: 'Para administrar a reserva em Autorenta use o número:',
        emailText: 'A reserva será enviada para o e-mail:',
        agencyText: 'Número de ID da agência de viagens',
        organizationText: 'Número de ID Corporativo',
        cancel: 'Cancelar',
        print: 'Imprimir',
      },
      reservationDetails: {
        title: 'Detalhe da reserva',
        fullName: 'Nome e sobrenome',
        email: 'E-mail',
        phone: 'Telefone',
        estimatedTotal: 'Total estimado da reserva',
        flyCompany: 'Companhia aérea',
        flyNumber: 'Número de voo',
        promotionalCode: 'Código promocional aplicado',
        coupon: 'Número do cupom aplicado',
        pickUpTitle: 'loja de retirada',
        dropOffTitle: 'loja de devolução',
        orSimilar: 'ou similar',
        seats: 'lugares',
        doors: 'portas',
        bigBags: 'malas grandes',
        smallBags: 'malas pequenas',
        gear: 'Transmissão',
        air: 'Ar-condicionado',
        selectedPlan: 'Plano selecionado',
        detailsTitle: 'Detalhe de tarifa, impostos e taxas',
        baseFee: 'Tarifa base',
        estimated: 'Total Estimado',
        additionalEquipmentTitle: 'Equipamento adicional solicitado',
        conditionsTitle: 'Condições gerais de locação',
        conditionText1:
          'Autorenta confirma grupos ou categorias e não marcas ou modelos de veículos, estes são apenas para ' +
          'orientação e podem variar sem aviso prévio. A imagem é apenas para fins ilustrativos.',
        conditionText2:
          'Lembre-se que é necessário apresentar um cartão de crédito internacional válido em nome do locatário ' +
          'no momento de retirar o veículo das lojas da locadora.',
        conditionText3: 'Algumas locadoras poderiam aplicar taxas e restrições para motoristas abaixo da idade mínima.',
        conditionText4:
          'O equipamento opcional não pode ser reservado, é apenas requerido.  É confirmado e ' +
          'pago na loja de retirada do veículo. O seu custo não está incluído no preço pré-pago deste aluguel ' +
          'e um preço estimado é mostrado como um guia.',
        conditionText5:
          'A maioria das locadoras oferece um período de tolerância de duas horas a partir do tempo acordado ' +
          'de devolução e o horário real de retirada do veículo. Se você acha que vai se atrasar, sugerimos ' +
          'entrar em contato diretamente com a loja local da empresa.',
        conditionText6:
          'Com respeito à devolução do veículo, as locadoras geralmente oferecem um período de tolerância de ' +
          '29 minutos a partir do tempo acordado e o horário real de retorno do veículo na ' +
          'loja local. Após este período de tempo, a empresa poderá cobrar o equivalente a ' +
          'um dia adicional de aluguel.',
        conditionText7:
          'Pode-se aplicar restrições geográficas, mesmo para planos de tarifas com base na quilometragem / ' +
          'milhagem ilimitada. Algumas locadoras não permitem a passagem de algumas fronteiras nacionais ou ' +
          'internacionais com o veículo ou aplicam-se taxas adicionais a quem quer que o faça.',
      },
    },
    promotion: {
      home: 'Home',
    },
    faq: {
      title: 'Perguntas frequentes',
      subtitle:
        'Resolvemos suas dúvidas para as perguntas mais frequentes que nossos clientes têm quando alugam um veículo.',
    },
    error: {
      message: 'Desculpe, ocorreu um erro inesperado. Por favor tente novamente.',
      goHome: 'Voltar ao início',
    },
  },
};
