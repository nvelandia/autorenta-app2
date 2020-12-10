import React from 'react';

export const es = {
  locale: 'es',
  messages: {
    common: {
      error: {
        attention: '¡Atención!',
        idInvalid: 'El número de ID ingresado no es válido.',
        couponORCodeInvalid: 'El número de cupón o código promocional no es valido.',
        clientType: 'No se ha seleccionado el tipo de cliente.',
        formStep2: 'Los campos marcados en rojo son obligatorios.',
        reservationNotFound: 'No se ha encontrado ninguna reserva con esos datos.',
        airlineIata: 'Debes seleccionar una compañía aérea.',
        airlineFlight: 'Debes completar el número de vuelo.',
        completeAllFields: 'Todos los campos son requeridos.',
        invalidEmail: 'La direccion de E-mail no es válida.',
        canNotPay:
          'Ocurrió un error en la transacción o algún dato proporcionado es incorrecto. Por favor verifica la información de tu tarjeta de crédito / débito e inténtalo nuevamente.',
      },
      validationMessages: {
        codePromotionalSuccess: 'El código promocional ingresado se aplicó correctamente a su reserva.',
        couponNumberSuccess: 'El número de cupón ingresado se aplicó correctamente a su reserva.',
        reservationCancelled: 'Su reserva ha sido cancelada',
        subscriptionSuccess: 'Te suscribiste correctamente a nuestra base de datos.',
      },
      navbar: {
        button: {
          reserve: 'Reservar',
        },
        links: {
          promotions: 'Promociones',
          searchReservation: 'Buscar Reservación',
          travelAgency: 'Agentes de Viaje',
          AutoRentaBusiness: 'AutoRenta Business',
          AutoRentaOnTheGo: 'AutoRenta ON THE GO',
        },
      },
      banner: {
        text: '¿Ya conoces nuestra nueva App? Descárgala para iPhone y Android',
      },
      footer: {
        subscribe: 'Suscríbete y recibe todas nuestras ofertas',
        fullName: 'Nombre y apellido',
        email: 'Dirección de E-mail',
        register: 'Regístrate ',
        contactUs: 'Contáctenos',
        sawgrass: '1580 Sawgrass Corporate Parkway',
        suite: 'Suite 130, Sunrise, FL 33323',
        info: 'info@autorenta.com',
        clientAttention: 'Atención al Cliente',
        adviser: 'Contacta a un Asesor Online',
        faq: 'Preguntas Frecuentes',
        searchReservation: 'Buscar una Reservación',
        affiliates: 'Afiliados',
        access: 'Acceder a tu Cuenta',
        registerAccount: 'Registrar una Cuenta',
        promotions: 'Promociones Vigentes',
        aboutUs: 'Sobre AutoRenta',
        politics: 'Políticas de Cancelación',
        cookies: 'Políticas de Cookies',
        privacy: 'Políticas de Privacidad',
        copyRight: 'Copyright © 2020 AutoRenta.com es una marca registrada de GMS. Todos los derechos reservados',
      },
      loader: {
        searching: 'Estamos buscando las mejores opciones de vehículos para las fechas seleccionadas.',
        cancel: 'Estamos cancelando tu reservación, por favor no cierres esta ventana.',
        creating: 'Estamos creando la reserva, aguarda un instante.',
        booking: 'Estamos buscando la reservación.',
        paying: 'Estamos procesando el pago de la reservación, por favor no cierres esta ventana.',
      },
      progressBar: {
        startYourSearch: 'Inicia la búsqueda',
        chooseYourPlan: 'Selecciona tu plan',
        confirmYourSearch: 'Confirma tu reserva',
      },
      searchReservationModal: {
        title: 'Buscar una reserva',
        id: 'ID de Agencia o Corporativo',
        checkbox: 'Soy una Agencia de Viajes o Cliente corporativo',
      },
    },
    home: {
      googleModal: {
        title: 'Encontrar una oficina o ubicación',
        button: 'BUSCAR EN EL ÁREA',
        notFoundTitle: '¡Atención!',
        notFound1: 'No se han encontrado arrendadoras en la ubicación seleccionada.',
        notFound2: 'Por favor inténtalo nuevamente modificando los parámetros de la búsqueda.',
        distance: 'Distancia: ',
        officeCode: 'Código de oficina: ',
        extendedOfficeCode: 'Código extendido: ',
      },
      makeYourReservation: {
        doYourReservationIn: 'Haz tu reserva en',
        only3Steps: 'sólo 3 pasos',
        placeToPickUp: '¿Dónde quieres retirar el vehículo?',
        placeToDropOff: '¿Dónde quieres entregar el vehículo?',
        country: 'País de residencia',
        age: 'Edad',
        carType: 'Tipo de vehículo',
        search: 'Buscar',
        dateToPickUp: 'Fecha y hora de retiro',
        dateToDropOff: 'Fecha y hora de entrega',
        findOnMap: 'Encontrar una oficina o ubicación en el mapa',
        years: 'años',
        types: {
          0: 'Todos los vehículos',
          1: 'Pequeño / Mini',
          2: 'Económico',
          3: 'Compacto',
          4: 'Intermedio',
          5: 'Standard',
          6: 'Grande',
          7: 'Premium / De lujo',
          8: 'Deportivo / Convertible',
          9: 'Minivan / Maxivan',
          10: 'SUV Económicos a Intermedios',
          11: 'SUV Standards a Grandes',
          12: 'SUV Premiums, Elites y De lujo',
          13: 'Crossovers',
          14: 'Station Wagon Economicos a Intermedios',
          15: 'Station Wagon Full Size, Premium, Lujo, Elite,',
        },
      },
      offers: {
        mainTitle: 'Descubre todas las ofertas y promociones',
        mainTitleMobile: 'Ofertas y promociones',
        button: 'Más información',
      },
    },
    step1: {
      resultMessage:
        'Lo sentimos, no encontramos resultados para la búsqueda solicitada. Por favor inténtalo nuevamente.',
      activeSearch: {
        title: 'Búsqueda activa',
        age: 'Edad: ',
        years: ' años',
        modify: 'Modificar',
        modifyModal: {
          title: 'Modificar la búsqueda',
        },
      },
      result: {
        showFirst: 'Mostrar vehículos destacados primero',
        orderBy: 'Ordenar por',
        minToMax: 'De menor a mayor precio',
        maxToMin: 'De mayor a menor precio',
        dropoff:
          'Pueden aplicar Cargos por One Way e impuestos ya que, seleccionaste una oficina de devolución diferente a la de inicio de la renta.',
        carsResult: {
          orSimilar: 'o similar',
          seats: 'asientos',
          doors: 'puertas',
          bigBags: 'maletas grandes',
          smallBags: 'maletas pequeñas',
          gear: 'Transmisión',
          air: 'Aire acondicionado',
          featured: '¡Destacado!',
          cancel: 'Cancela gratis esta reserva con 48 horas de anticipación.',
          adviseThin: 'Algunas rentadoras cobran un ',
          adviseStrong: 'cargo extra a conductores menores de 25 años.',
          additionalInformation: 'Información importante',
          seeDetails: 'Ver detalle del plan',
          reserveNow: 'Reservar ahora',
        },
        filterList: {
          mainTitle: 'Filtrar resultados',
          companies: 'COMPAÑÍA arrendadora',
          types: 'TIPOS DE VEHÍCULO',
          seats: 'CANTIDAD DE PASAJEROS',
          bags: 'CAPACIDAD DE MALETAS',
          gears: 'TIPO DE TRANSMISIÓN',
          price: 'RANGO DE PRECIO',
          moreBags: '  ó  más  maletas',
        },
        modalDetailInformation: {
          title: 'Ver detalle de esta tarifa',
          subtitle: 'Código de la tarifa:',
        },
        modalAdditionalInformation: {
          title: 'Información importante',
          secureTitle: 'Seguros y coberturas',
          secureText:
            'En la mayoría de los planes de renta se incluyen los seguros y coberturas considerados como indispensables\n' +
            'para proteger el vehículo y a terceros durante el arrendamiento. Existen otras protecciones que son opcionales \n' +
            'y su aceptación no deberá condicionar la renta.',
          franTitle: 'Deducible / Franquicia',
          franText:
            'El deducible/franquicia que aplica en algunos seguros y coberturas es una cantidad o porcentaje\n' +
            'deberá cubrir en caso de daño, pérdida o robo del vehículo rentado, el cual variará en relación\n' +
            'con el tipo de vehículo alquilado.',
          depoTitle: 'Depósito en garantía',
          depoText:
            'El depósito en garantía es una preautorizacion que se realiza a la tarjeta de crédito del cliente por\n' +
            'los cargos estimados de la renta. No es un cargo es únicamente un bloqueo y el monto o porcentaje\n' +
            'dependerá de la arrendadora. Al finalizar el alquiler será liberado y el tiempo que tarde su restitución\n' +
            'dependerá del banco.',
          poliTitle: 'Políticas de combustible',
          poliText:
            'l inicio de la renta se entregará el vehículo con el tanque de combustible lleno y se deberá devolver\n' +
            'de igual manera, a excepción del plan de renta que lo incluye, en el caso de no hacerlo así se\n' +
            'cobrará la cantidad de combustible faltante más un cargo por servicio.',
          kiloTitle: 'Kilometraje / Millaje',
          kiloText:
            'En la mayoría de los planes de renta se incluye kilometraje / millaje libre; sin embargo, para\n' +
            'algunos vehículos o ciudades en particular se tendrá un número específico de kilómetros / millas por\n' +
            'día, al superar el límite establecido habrá un cargo adicional por cada kilómetro / milla excedido.',
          cardTitle: 'Tarjeta de crédito y débito',
          cardText:
            'Al inicio del alquiler se deberá presentar físicamente una tarjeta de crédito internacional\n' +
            'valida y vigente del titular de la renta con su nombre impreso o grabado. No se aceptan tarjetas\n' +
            'de débito debido a que no permiten preautorizaciones y el depósito en garantía no podrá ser reembolsado.',
        },
      },
    },
    step2: {
      details: {
        optionalEquipment: 'Total de equipamiento opcional',
        baseFee: 'Tarifa base',
        totalFee: 'Total de cargos e impuestos',
        title: 'Detalles de la reserva',
        selectedPlan: 'PLAN SELECCIONADO',
        changePlan: 'Cambiar plan',
        feeCode: 'Código de la tarifa: ',
        additionalEquipment: 'EQUIPAMIENTO OPCIONAL SOLICITADO',
        chargesDetail: 'TARIFA, CARGOS E IMPUESTOS',
        estimatedTotal: 'TOTAL ESTIMADO',
        text1:
          'Recuerda que deberás presentar físicamente una tarjeta de crédito internacional valida y vigente ' +
          'con una antigüedad mínima de un año a nombre del titular de la renta teniendo su nombre impreso o ' +
          'grabado al momento del inicio de la renta.',
        text2:
          'Las arrendadoras podrían aplicar un cargo adicional y tener restricciones para conductores por debajo de ' +
          'la edad mínima.',
        text3:
          'Algunos cargos e impuestos indicados podrían no estar incluidos en la tarifa base, así como el equipamiento ' +
          'opcional, los cuales solamente podrán ser pagados en destino.',
        agree:
          'He leído y acepto los requisitos para rentar, así como los Términos y Condiciones vigentes en el país y ' +
          'ciudad de alquiler.',
        confirm: 'Confirmar reserva',
      },
      carSelected: {
        orSimilar: 'o similar',
        seats: 'asientos',
        doors: 'puertas',
        bigBags: 'maletas grandes',
        smallBags: 'maletas pequeñas',
        gear: 'Transmisión',
        air: 'Aire acondicionado',
        featured: '¡Destacado!',
        cancel: 'Cancela gratis esta reserva con 48 horas de anticipación.',
        adviseThin: 'Algunas rentadoras cobran un ',
        adviseStrong: 'cargo extra a conductores menores de 25 años.',
        additionalInformation: 'Información adicional',
        seeDetails: 'Ver detalle del plan',
        reserveNow: 'Reservar ahora',
      },
      clientType: {
        title: 'Tipo de cliente',
        passenger: 'Cliente directo',
        agency: 'Agencia de Viajes',
        corporation: 'Corporativo / Empresa',
        choose: 'Selecciona una opción',
        validate: 'Validar',
        typeYourId: 'Ingresa tu número de ID',
      },
      passenger: {
        email: 'E-mail',
      },
      agencyOrCorporation: {
        title: 'Información del cliente',
        subtitle: 'Información personal del titular de la renta',
        name: 'Nombre',
        surname: 'Apellido',
        phone: 'Teléfono (opcional)',
        flyCompany: 'Compañía aérea (opcional)',
        flyNumber: 'Número de vuelo (opcional)',
        additionalInformation: 'Información adicional',
        promotionalCode: 'Código promocional',
        coupon: 'Número de cupón',
      },
      optionalEquipment: {
        title: 'Agrega equipamiento opcional a tu renta',
        titleMobile: 'Agrega equipamiento opcional',
        text:
          'El equipamiento opcional solamente puede ser reservado, quedando a disponibilidad, siendo confirmado al inicio' +
          'de la renta y cobrado al finalizar la misma. Su costo no está incluido en la tarifa y se mostrará un precio' +
          'estimado de manera informativa, sujeto a cambios sin previo aviso.',
        perDay: '(por día)',
        GPS: 'Navegador satelital',
        babySeat: 'Asiento para bebés',
        childrenSeat: 'Asiento para niños',
        elevatorSeat: 'Asiento elevador para niños',
        elevatorSeatMobile: 'Asiento elevador',
      },
      changePlan: {
        title: 'Cambiar plan de tarifa',
        quoteFee: 'Cotizar esta tarifa',
        selectedFee: 'Tarifa seleccionada',
      },
      requirements: {
        title: 'REQUISITOS PARA RENTAR UN VEHÍCULO',
        question1: 'Edad Mínima',
        response1:
          'La edad mínima para alquilar un vehículo es de 25 años. Entre 21 y 24 años (Conductor Joven) podrán estar sujetos a un cargo adicional que variará según la oficina de renta y es posible que no puedan alquilar vehículos de categoría Premium, De Lujo, SUVs, Minivan Maxivan, Especial, SUV, Minivan, Convertible, Crossover. Para los conductores adicionales aplica el mismo requisito de edad mínima.',
        question2: 'Identificación',
        response2:
          'El titular de la renta y cada conductor adicional deberán presentar una identificación oficial vigente con fotografía expedida en el país de residencia y una antigüedad mínima de un año. Para rentas internacionales será el pasaporte.',
        question3: 'Licencia de conducir',
        response3:
          'Presentar físicamente una licencia de conducir vigente expedida en el país de residencia del titular de la renta y conductores adicionales con una antigüedad mínima de un año (en determinados destinos y grupos de autos deberá tener de 2 a 3 años). En algunas ciudades de Estados Unidos y países se requiere presentar la Licencia Internacional de Conducir junto con la licencia de conducir del país de origen, aplicándose también a cada conductor adicional.',
        question4: 'Tarjeta de crédito',
        response4:
          'Se deberá presentar físicamente una tarjeta de crédito internacional valida y vigente con una antigüedad mínima de un año a nombre del titular de la renta teniendo su nombre impreso o grabado. No se aceptan tarjetas de débito debido a que no permiten preautorizaciones y el depósito en garantía no podrá ser reembolsado.',
        question5: 'Cargos e Impuestos Extras',
        response5:
          'Podrán aplicarse cargos e impuestos extras por conductor joven, equipamiento opcional o por devolución en una oficina diferente a la del inicio del alquiler (One-Way Fee).',
        question6: 'Comprobante de reserva prepagada (Voucher)',
        response6:
          'Al inicio de la renta se podrá presentar una copia impresa o electrónica del comprobante de confirmación de la reserva prepagada (voucher). Este documento confirma el plan de renta contratado con los servicios que se encuentran incluidos, al igual que la disponibilidad del vehículo dentro de la categoría seleccionada. Si la reserva es válida para pago en destino (POD) el titular de la renta se presentará en la oficina de la arrendadora que corresponda proporcionando el número de reserva para iniciar el proceso de alquiler.',
        question7: 'Información importante',
        response7:
          'Las arrendadoras se reservan el derecho de no aceptar cualquier solicitud de alquiler si no cumplen con alguno de los requisitos para rentar un vehículo o a su criterio, la persona constituya un riesgo para la comunidad.',
      },
    },
    step3: {
      agencyOrOrganizationPayment: {
        reservationValue: 'Valor total de la renta:',
        discount: 'Descuento AutoRenta (sólo prepago):',
        commission: 'Comisión de la Agencia (sólo prepago):',
        neto: 'Neto a pagar (sólo prepago):',
        titleReservation1: 'Pagar reserva con tarjeta de crédito',
        titleReservation2: 'El voucher y la factura se enviarán por E-mail y se cargarán en su perfil de usuario.',
        choose: 'Seleccione el método de pago:',
        next: 'Siguiente',
        bankTitle: 'Para pagar con una transferencia bancaria',
        bankSubtitle: 'Realiza un depósito o transferencia a la siguiente cuenta bancaria.',
        bank: 'Banco: ',
        accountNumber: 'Número de cuenta: ',
        routeNumber: 'Giros Electrónicos: ',
        deposit: 'Depósitos directos: ',
        swift: 'SWIFT: ',
        message: 'Luego, envía el comprobante electrónico por E-mail a:',
      },
      payment: {
        titleReservation: 'Paga esta reserva con tarjeta de crédito',
        subtitleReservation1: '¡Paga ahora y obtén un descuento de ',
        subtitleReservation2: ' en la tarifa base de esta reserva!',
        choose: 'Por favor selecciona el método de pago para esta reserva:',
        creditCard: 'Pagar con Tarjeta de Crédito / Débito',
        next: 'Siguiente',
        creditCardPayment: {
          cardNumber: 'Número de la tarjeta',
          country: 'País de emisión',
          cvc: 'CVC (código de seguridad)',
          cvcMobile: 'Código de seguridad',
          expirationDate: 'Vigencia MM/AA',
          postalCode: 'Códigal postal',
          payNow: 'Pagar esta reserva ahora',
          payNow2: 'Pagar ahora',
          back: 'Volver',
        },
        account: 'Ingresa los datos de tu cuenta',
        email: 'Direccion de E-mail',
        password: 'Contraseña',
        login: 'Iniciar sesión',
        back: 'Volver',
        payOk: '¡Pago exitoso!',
        text1: 'Para pagar esta reserva en destino (POD)',
        text2: 'Dirígete a la oficina de la arrendadora seleccionada y menciona el número de reserva.',
        text3:
          'El titular de la renta deberá cumplir con los requisitos para rentar un vehículo: edad ' +
          'mínima, Identificación oficial, licencia de conducir y tarjeta de crédito internacional ' +
          'valida.',
        reservationNumber: 'Para pago en destino proporciona la clave de confirmación:',
      },
      reservationState: {
        cancelReservationModal: {
          title: 'Cancelar una reserva',
          subtitle:
            '¡Atención! Estás a punto de cancelar tu reserva. ¿Deseas continuar? \n' +
            'Una vez cancelada esta acción no podrá deshacerse.',
          lastname: 'Apellido del cliente',
          reservationNumber: 'Número de reserva AutoRenta',
          email: 'Direccion de E-mail',
          agency: 'ID de Agencia de Viajes',
          corporation: 'Id Corporativo',
          cancel: 'Cancelar esta reserva',
        },
        titleReservation: '¡Realizaste la reserva correctamente!',
        textReservation:
          'Consulta a continuación las opciones de pago que te ofrecemos para esta reserva o comunicate telefónicamente al: ',
        titlePayment: '¡Pagaste la reserva correctamente!',
        textPayment1: 'Cobramos ',
        textPayment2: ' a la tarjeta finalizada en ',
        textPayment25:
          'Recuerda que los impuestos y cargos así como el equipamiento opcional requerido deberán ser abonados en destino en las oficinas de la compañía arrendadora al inicio de la renta.',
        textPayment26:
          'Recuerda que los impuestos y cargos así como el equipamiento opcional requerido deberás abonarlos en destino en las oficinas de la compañía arrendadora al inicio de la renta.',
        textPayment3: '. ¡Obtuviste un descuento de ',
        textPayment4: 'En breve te enviaremos la factura y el voucher correspondiente',
        subtitle: 'Para gestionar la reserva en AutoRenta utiliza el número:',
        emailText: 'La reserva será enviada al E-mail:',
        agencyText: 'Número ID de Agencia de Viajes',
        organizationText: 'Número de ID Corporativo',
        cancel: 'Cancelar',
        print: 'Imprimir',
      },
      reservationDetails: {
        title: 'Detalle de la reserva',
        fullName: 'Nombre y apellido',
        email: 'E-mail',
        phone: 'Teléfono',
        estimatedTotal: 'Total estimado de la reserva',
        flyCompany: 'Compañía aérea',
        flyNumber: 'Número de vuelo',
        promotionalCode: 'Código promocional aplicado',
        coupon: 'Número de cupón aplicado',
        pickUpTitle: 'oficina de inicio',
        dropOffTitle: 'oficina de devolución',
        orSimilar: 'o similar',
        seats: 'asientos',
        doors: 'puertas',
        bigBags: 'maletas grandes',
        smallBags: 'maletas pequeñas',
        gear: 'Transmisión',
        air: 'Aire acondicionado',
        selectedPlan: 'Plan seleccionado',
        detailsTitle: 'Tarifa, cargos e impuestos',
        baseFee: 'Tarifa base',
        optionalEquipment: 'Total de equipamiento opcional',
        estimated: 'Total Estimado',
        additionalEquipmentTitle: 'Equipamiento opcional',
        optionalEquipmentTaxes: 'Podrán aplicarse cargos e impuestos extras por el equipamiento opcional seleccionado.',
        conditionsTitle: 'Condiciones generales de la renta',
        conditionText1:
          'AutoRenta confirma tipos o categorías y no marcas o modelos de vehículos de cada arrendadora. Los mismos son a modo orientativo y pueden variar sin previo aviso. La imagen que se muestra es solamente a modo ilustrativo.',
        conditionText2:
          'La edad mínima para alquilar un vehículo es de 25 años. Entre 21 y 24 años (Conductor Joven) podrán estar sujetos a un cargo adicional que variará según la oficina de renta y es posible que no puedan alquilar vehículos de categoría Premium, De Lujo, SUVs, Minivan Maxivan, Especial, SUV, Minivan, Convertible, Crossover. Para los conductores adicionales aplica el mismo requisito de edad mínima.',
        conditionText3:
          'El titular de la renta y conductores adicionales deberán presentar físicamente una licencia de conducir vigente expedida en su país de residencia con una antigüedad mínima de un año (en determinados destinos y grupos de autos deberá tener de 2 a 3 años).',
        conditionText4:
          'En algunas ciudades de Estados Unidos y países se requiere presentar la Licencia Internacional de Conducir junto con la licencia de conducir del país de origen, aplicándose también a cada conductor adicional.',
        conditionText5:
          'El titular de la renta deberá presentar físicamente una tarjeta de crédito internacional valida y vigente con una antigüedad mínima de un año teniendo su nombre impreso o grabado.',
        conditionText6:
          'Se realizará un depósito en garantía (preautorizacion) en la tarjeta de crédito por los cargos estimados de la renta. No es un cargo es únicamente un bloqueo y el monto o porcentaje dependerá de la arrendadora. Al finalizar el alquiler será liberado y el tiempo que tarde su restitución dependerá del banco.',
        conditionText7:
          'No se aceptan tarjetas de débito debido a que no permiten preautorizaciones y el depósito en garantía no podrá ser reembolsado.',
        conditionText8:
          'El equipamiento opcional solamente puede ser reservado, quedando a disponibilidad, siendo confirmado al inicio de la renta y cobrado al finalizar la misma. Su costo no está incluido en la tarifa y se mostrará un precio estimado de manera informativa, sujeto a cambios sin previo aviso.',
        conditionText9:
          'Podrán aplicarse cargos e impuestos extras por conductor joven, equipamiento opcional o por devolución en una oficina diferente a la del inicio del alquiler (One-Way Fee).',
        conditionText10:
          'La mayoría de las arrendadoras pueden esperar al cliente hasta dos horas para el inicio de la renta en base a la hora indicada en la reserva, si crees que llegaras más tarde, recomendamos te pongas en contacto directamente con la oficina de renta de la arrendadora seleccionada para notificar la hora estimada en que te podrás presentar para hacer efectiva tu reserva.',
        conditionText11:
          'En cuanto a la devolución del vehículo, las arrendadoras pueden ofrecer un período de gracia de hasta 29 minutos en base a la hora indicada en la reserva. Una vez pasado este período de tiempo, es posible que se realice un cargo adicional por hora o día adicional de acuerdo con el tiempo transcurrido.',
        conditionText12:
          'Si la renta será extendida por más tiempo (horas o días) a lo indicado en la reserva, se deberá contactar directamente con la oficina de renta de la arrendadora seleccionada para notificar la hora y/o día estimado para la devolución del vehículo y terminación de la renta.',
        conditionText13:
          'Para cualquier cambio en la reserva comunícate al: 954.237.4737 o por correo electrónico: info@autorenta.com.',
      },
    },
    promotion: {
      home: 'Inicio',
      title: 'Promociones',
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle:
        'Resolvemos tus dudas a las preguntas más frecuentes que tienen nuestros clientes al alquilar un coche.',
      question1: '¿Cuáles son los requisitos de alquiler al momento de retirar el vehículo?',
      response1_1:
        'Depósito de garantía: Un depósito será requerido como garantía al momento de retirar el vehículo y este será bloqueado en tu tarjeta de crédito. El monto del depósito será definido únicamente por la compañía de alquiler al momento de retirar el vehículo.',
      response1_2:
        'Licencia de conducir: Deberás presentar una licencia vigente (en alfabeto latino) expedida en tu país de origen. Ten en cuenta que si tu licencia no se encuentra en alfabeto latino, deberás presentar un permiso de conducir internacional junto con tu licencia. Este permiso es considerado como un requisito obligatorio en algunas partes de Estados Unidos. Por favor confirma esta información con la entidad correspondiente antes de viajar.',
      response1_3:
        'Tarjeta de crédito: El titular de la reserva deberá contar con una tarjeta de crédito registrada a su nombre, impreso en ella y fondos suficientes para dicho depósito de garantía. ',
      response1_4: 'Edad mínima: El conductor principal debe ser mayor de 25 años.',
      response1_5: 'Pasaporte vigente.',
      question2: '¿Es posible utilizar una tarjeta de crédito de un familiar y/o amigo para el depósito de garantía?',
      response2:
        'La tarjeta de crédito deberá estar a nombre del conductor principal. Por lo tanto, no será posible hacer uso de una tarjeta a nombre de otra persona.',
      question3: '¿Qué inclusiones puedo adquirir en mi reservación?',
      response3:
        'A través de nuestros planes tarifarios, tendrás la posibilidad de incluir la cobertura del vehículo rentado, seguro contra terceros, tanque de gasolina, navegador satelital y/o conductor adicional, entre otros. Estas opciones están sujetas a disponibilidad y siempre se mencionarán en las inclusiones de cada plan tarifario.',
      question4: '¿Cómo puedo cancelar o modificar mi reservación?',
      response4_1:
        'Podrás cancelar tu reserva desde la sección "Buscar reserva" y luego desde la opción "Cancelar reserva".',
      response4_2:
        'Para modificar tu reservación sin costo alguno, por favor comunícate con nuestro departamento de servicio al cliente.',
      question5: '¿Todos los impuestos y costos están incluidos en el valor de mi reservación?',
      response5:
        'El valor de tu reservación incluye todos los impuestos y costos obligatorios. Ten en cuenta que algunos impuestos y/o recargos se deberán pagar en destino así como el equipamiento opcional requerido en tu reservación.',
      question6: '¿Cuál es el valor del depósito requerido por la compañía de alquiler?',
      response6_1:
        'El valor del depósito puede variar de acuerdo a la temporada, itinerario y categoría de vehículo. Dicho monto será confirmado por la compañía de alquiler al momento de recoger el vehículo. El titular de la reserva deberá contar con una tarjeta de crédito bajo su nombre impreso en ella y fondos suficientes para dicho depósito de garantía.',
      response6_2:
        'El depósito será liberado al momento de devolver el vehículo. Sin embargo, el dinero puede tardar hasta 15 días hábiles para verse reflejado en la cuenta del titular.',
      question7: '¿Todas las compañías de alquiler ofrecen servicio de traslado?',
      response7:
        'No todas las compañías de alquiler ofrecen servicio de traslado. Para verificar esta información, por favor comunícate con nuestro departamento de servicio al cliente.',
      question8: '¿Es más económico agregar los seguros al momento de hacer la reservación o al retirar el vehículo?',
      response8:
        'Te recomendamos incluirlos al momento de hacer la reserva ya qué los precios de los seguros pueden ser hasta tres veces mas costosos si son adquiridos al momento de retirar el vehículo.',
      question9: '¿Como puedo evitar el recargo a conductores menores de 25 años?',
      response9:
        'Al reservar con las marcas Avis / Budget, conductores de 21 a 24 años podrán evitar el recargo generado a menores de edad. La reservación deberá ser prepagada e incluir las coberturas del vehículo rentado y seguro a terceros. Este beneficio solo aplica para las categorías Económico, Compacto, Standard, Intermedio, Grande y SUV Intermedio.',
      question10: '¿Cómo adquirir el sistema electrónico de peajes y cuánto cuesta?',
      response10:
        'El sistema electrónico de peajes no se encuentra incluido en ninguna de nuestras tarifas. Este servicio podrá ser adquirido directamente en el counter de la compañía arrendadora y su valor será informado al momento de retirar el vehículo.',
      question11: '¿Es posible realizar la modificación de mi reservación cuando esta se encuentra en uso?',
      response11:
        'Una vez se haya firmado el contrato y el vehículo se encuentre en uso, no será posible modificar la reservación a través de vehículorenta. Este proceso lo deberás realizar directamente con la compañía arrendadora en el counter donde inicie tu alquiler.',
      question12: '¿Puedo rentar el vehículo en una localidad y entregarlo en otra?',
      response12:
        'Se podrá realizar la entrega del vehículo en una localidad diferente, siempre y cuando nuestro sitio web brinde disponibilidad. Este servicio puede tener un costo adicional el cual se mostrará al momento de hacer la reservación online y en la mayoría de ocasiones, se deberá pagar en destino justo a los impuestos correspondientes o equipamiento opcional requerido.',
      question13: '¿Existe algún tipo de cobro adicional por realizar modificaciones en mi reservación?',
      response13:
        'vehículorenta no genera ningún cargo adicional por modificar tu reserva. Sin embargo, ten en cuenta que la tarifa puede variar según los cambios solicitados y el valor adicional será cobrado por el asesor al momento de realizar dicho proceso.',
      question14: '¿Cómo puedo adicionar la silla para bebé en mi reservación?',
      response14:
        'Nuestras tarifas no incluyen este servicio. Desde nuestro sitio web podrás requerir la silla para bebe / niños directamente o bien desde el counter de la compañía arrendadora pagando un costo adicional al momento de retirar el vehículo.',
      question15: '¿Cómo debo proceder en caso de cobros adicionales por servicio de peajes?',
      response15:
        'Al no ser un servicio incluido por parte de AutoRenta, el titular de la reservación deberá ponerse en contacto directamente con la compañía arrendadora con la cual se finalizó la reserva. Es importante aclarar que la compañía arrendadora cargara a la tarjeta de crédito registrada, cualquier costo de infracción más tasas administrativas que sean resultado la misma.',
      question16: '¿Cómo puedo evitar cargos adicionales en mi reservación?',
      response16:
        'Al momento de retirar el auto, revisa detalladamente tu contrato de alquiler y asegúrate de que las condiciones coincidan con lo reservado a través de nuestro sitio web.',
      question17: '¿Qué sucede si entrego el auto más tarde de lo acordado?',
      response17:
        'Entregar el vehículo después de la hora acordada generara costos adicionales. Si necesitas entregarlo más tarde de lo acordado, por favor comunícate con la localidad donde retiraste el vehículo. El número de la localidad, lo podrás encontrar en la copia del contrato entregado al inicio del alquiler.',
      question18: '¿Cómo funcionan las coberturas de los seguros adquiridos por medio de AutoRenta?',
      response18:
        'En caso de algún inconveniente o accidente durante tu periodo de alquiler, el titular de la reservación deberá ponerse en contacto con la compañía arrendadora y ellos a su vez harán efectivas las pólizas adquiridas.',
      question19: '¿Cuál es la política de combustible en el alquiler?',
      response19_1:
        'Si tu reservación incluye el tanque de gasolina, podrás devolver el vehículo rentado con el tanque vacío o al nivel que desees.',
      response19_2:
        'Si tu reservación no incluye el tanque de gasolina, deberás devolver el vehículo bajo el mismo nivel de combustible con el que te fue entregado. Ten en cuenta que algunas compañías arrendadoras requieren que el tanque sea lleno en una estación de gasolina cercana a la localidad de devolución y a su vez, solicitan el recibo como comprobante.',
      question20: '¿Como funciona la asistencia en carretera que se encuentra incluida en las tarifas de AutoRenta?',
      response20:
        'En caso de presentar alguna falla mecánica con el auto rentado, deberás comunicarte directamente con la compañía arrendadora para solicitar asistencia oportuna. ',
      question21: '¿Es posible incluir más de un conductor adicional en mi reservación?',
      response21:
        'Si, es posible incluir más de un conductor adicional en tu reservación. Algunas compañías arrendadoras te brindan esta opción. Todo conductor adicional deberá estar presente al momento de retirar el vehículo y cumplir con los mismos requisitos que el conductor principal.',
      question22:
        '¿Por qué el valor de la tarifa en mi cotización final es más alto en comparación a la tarifa brindada en los resultados de la disponibilidad (primer paso)?',
      response22:
        'Deberás tener en cuenta que el valor que se evidencia en la página de disponibilidad de tu cotización (primer paso), es un valor básico correspondiente a la renta del auto. Una vez ingreses a la cotización final, el valor podrá aumentar teniendo en cuenta que será el valor total a pagar incluyendo los impuestos, tasas y recargos correspondientes además de cualquier equipamiento opcional requerido o cargos por devolución en otra oficina (en caso de corresponder).',
      question23: '¿Puedo alquilar un auto por más de 30 días?',
      response23:
        'Si, algunas de compañías arrendadoras te permiten alquilar el vehículo por un periodo de 30 días o más. Al realizar la cotización, nuestra plataforma te brindará los resultados de acuerdo a la búsqueda seleccionada.',
      question24: '¿Existe alguna restricción para conducir el auto rentado hacia otro país y/o estado?',
      response24:
        'La mayoría de compañías arrendadoras tienen sus propias políticas en referencia al cruce de fronteras de países limítrofes. Deberás consultar a uno de nuestros asesores en caso de necesitar mayor información sobre el cruce de fronteras.',
      question25:
        '¿Cuál es el procedimiento a seguir en caso de resultar involucrado en un accidente de tránsito con el auto rentado?',
      response25:
        'Si resultas involucrado en un accidente de tránsito, inmediatamente deberás comunicarte con la línea de emergencia correspondiente. Posteriormente deberás reportar el incidente con la compañía arrendadora. El número de la oficina, lo podrás encontrar en la copia del contrato entregado al momento de retirar el vehículo rentado.',
      question26:
        'Si soy el único conductor registrado en el contrato de alquiler, ¿puede alguien más conducir el vehículo rentado?',
      response26:
        'Solo conductores registrados en el contrato de alquiler podrán conducir el vehículo rentado. Tendrás la opción de incluir conductores adicionales al contrato de alquiler por un costo adicional, a menos que hayas reservado plan tarifario que incluya dicho beneficio. Todo conductor adicional deberá estar presente al momento de retirar el vehículo y cumplir con los mismos requisitos que el conductor principal.',
      question27: '¿Tengo alguna restricción de uso del auto rentado?',
      response27:
        'Si, los autos rentados a través de AutoRenta no deberán ser usados para remolcar otros vehículo, con fines de transporte público u otras funciones no correspondientes al alquiler. Toda restricción referente al uso del vehículo será aclarada al momento de firmar el contrato de alquiler.',
    },
    cookies: {
      title: 'Políticas de cookies.',
      subtitle:
        'Esta política define como AutoRenta.com recopila y usa información a través de cookies. A continuación será descrita la manera como la página web AutoRenta.com utiliza esta tecnología para aportar funcionalidad adicional para el cliente.',
      condition:
        'La no aceptación de esta política no implicará un acceso limitado del cliente al sitio web. Solamente reducirá el nivel de interacción con las utilidades de la página.',
      question1: '¿Qué son las cookies?',
      response1_1:
        'Las cookies son pequeños archivos de texto que el navegador almacena en tu dispositivo (PC o dispositivo móvil). Estos pequeños archivos permiten que la página web almacene información tal como tus preferencias, así como dirección IP o incluso información sobre tu sistema operativo y/o dispositivo (PC o Móvil).',
      response1_2:
        'Esta tecnología de cookies se puede representar como la memoria de una página web utilizada para identificar al cliente y sus preferencias para presentar información más relevante.',
      question2: '¿Qué cookies usa AutoRenta.com y cómo funcionan?',
      response2_1: 'Cookies de Inicio de Sesión',
      response2_2:
        'Usamos cookies para identificar cuando has iniciado sesión en nuestra plataforma, y así poder recordarte cuando vuelvas a él. Estos cookies son eliminados cada vez que finalices tu sesión. Esto garantiza también que el usuario pueda acceder a ciertas areas e informaciones cuando haya iniciado sesión.n',
      question3: 'Cookies externos en nuestra página',
      response3_1:
        'Nuestro sitio utiliza Google Analytics como herramienta de análisis de tráfico. Lo usamos para entender mejor el comportamiento de nuestros clientes dentro del sitio web. Estas cookies pueden registrar el tiempo en el que el cliente permaneció en la página web así como las páginas especificas a las que accedió, con la finalidad de mostrar contenido adecuado.',
      response3_2:
        'De vez en cuando probamos nuevas funcionalidades y diseño en nuestro sitio para mejorar la experiencia del usuario. Utilizamos cookies para medir los resultados.',
      question4: 'Información reunida de tu dispositivo (PC / móvil)',
      response4:
        'Recopilamos información al momento que el cliente accede a nuestro sitio web. Esta información es recopilada de tu navegador e incluye dirección IP, sistema operativo, tipo de navegador, resolución de la pantalla y el sitio de referencia usada para encontrar AutoRenta.com',
      question5: 'Cómo deshabilitar el almacenamiento de información de las cookies',
      response5_1:
        'En el caso en el que el cliente no se sienta cómodo con el uso de la tecnología de cookies y con la información que AutoRenta.com pueda recopilar, siempre puede acceder a la configuración de su navegador y borrar o incluso retirar los permisos de acceso de las cookies.',
      response5_2:
        'Cada navegador tiene funcionalidades que pueden limitar las funciones de las cookies de una página web. Cada navegador tiene diferentes conjunto de configuraciones. Te recomendamos que busques en la sección ayuda de tu navegador la información necesaria para deshabilitar estas funcionalidades en la sección ayuda de tu navegador.',
      response5_3:
        'También puedes gestionar las cookies en preferencias de cookies en este enlace puedes habilitar y deshabilitar las cookies que quieras',
      question6: 'Más información',
      response6_1:
        'Esperamos haber podido disipar cualquier duda que el cliente pueda tener referente al uso de cookies así como sobre el uso de los datos recopilados en nuestro sistema por esta tecnología. Sin embargo, si todavía hubiese dudas o preguntas referentes a la materia, estamos a la entera disposición del cliente.',
      response6_2: 'Nuestra información de contacto:',
      response6_3: 'Email: info@autorenta.com',
      response6_4: 'Website: www.autorenta.com',
      response6_5: '2020 © AutoRenta.com. Todos los derechos reservados.',
    },
    privacy: {
      title: 'Políticas de privacidad.',
      subtitle1:
        'Estas Política de Privacidad han sido elaboradas para reforzar nuestro compromiso de preservar la información personal de nuestros clientes.',
      subtitle2:
        'El siguiente documento aborda como AutoRenta.com maneja la información confidencial del usuario, sea recopilada directamente a través de la página web / móvil o almacenada en su base de datos a través de otros métodos de recolección, como llamadas telefónicas o formularios de suscripción.',
      subtitle3:
        'Estas políticas no son aplicables a compañías que no sean propiedad o estén bajo control de AutoRenta.com, así como individuos que no actúen como empleados o contratados de AutoRenta.com.',
      subtitle4:
        'Nuestro sitio web puede tener enlaces a sitios web externos. AutoRenta.com no se responsabiliza de las políticas de privacidad ni del contenido de las mismas. Te recomendamos siempre que leas las política de privacidad de cualquier sitio web antes de proporcionar cualquier información confidencial.',
      subtitle5:
        'Estas políticas de privacidad dependen de la norma vigente y por lo tanto está sujeta a cambios. Te recomendamos revisarlas periódicamente.',
      subtitle6:
        'Si AutoRenta.com realizase cambios sustanciales en sus procesos de tratamiento de información confidencial, y esto afectase las condiciones de seguridad o confidencialidad, el cliente sería diligentemente notificado a través de una notificación pública en nuestra página de inicio o uba notificación via e-mail para usuarios registrados en nuestras base de suscriptores.',
      subtitle7: 'Las siguientes disposiciones se deben considerar a propósito de estas políticas:',
      point1_1:
        'AutoRenta.com recopila información personal (capaz de identificar un usuario) cuando: el usuario se registre y crea una nueva cuenta; cuando el usuario se suscriba para participar en nuestras promociones y concursos; o cuando el usuario se ponga en contacto con nosotros a través de los canales de atención al cliente.',
      point1_2:
        'Los datos recopilados y su uso están tipificados en el item 8 de esta política\n' +
        'Si el usuario necesitase más información o ponerse en contacto directo, podría hacerlo a través de E-mail: info@autorenta.com',
      point1_3:
        'Esta tipificado como derecho del usuario el solicitar una copia de todas las informaciones referentes a su persona. Esta solicitud puede realizarse a través del email info@autorenta.com',
      point2_1:
        'Para cada modelo de recolección de datos, puede solicitarse diferente información dependiendo de el propósito de dicha recopilación. El usuario siempre será informado de la recolección de datos y podrá optar por no proveerlos. Las consecuencias de la decisión, independientemente de cual sea, también sera informada.',
      point2_2:
        'El propósito de los datos recopilados, así como el tiempo de retención de estos datos figurará en el formulario de registro siempre que sea posible.',
      point3_1:
        'AutoRenta.com recibe y almacena información de navegador (dirección I.P y páginas visitadas) automáticamente a través de cookies.',
      point3_2:
        'Los cookies son secciones cortas de información que generalmente incluyen un identificador anónimo único enviado a tu navegador por algunas páginas web que se mantiene almacenada en el disco duro de tu ordenador. Se utilizan para identificarte durante tu próxima visita a dichas páginas web.',
      point4_1:
        'Ingresar datos personales de usuario en el sitio web de AutoRenta.com, así como aceptar los cookies del navegador, no son necesarios para navegar el sitio web. El usuario que decida hacerlo automáticamente reconoce y acepta los términos y condiciones aquí mencionados.',
      point5_1:
        'Todos los datos recopilados por AutoRenta.com son gestionados a través de protocolos de internet seguros y encriptados.',
      point6_1:
        'AutoRenta.com hace el máximo esfuerzo para el correcto y confidencial almacenamiento de la información personal de cada cliente.',
      point7_1: 'Toda la información recopilada es almacenada en la base de datos de AutoRenta.com, ubicada en: ...',
      point8_1:
        'AutoRenta.com utiliza la información personal del usuario para los siguientes propósitos generales: (I) informar al usuario sobre nuevos productos; (II) actualizar información de usuario para fines de contacto por E-mail o contacto telefónico, entre otros medios de comunicación; (III) agilizar la experiencia del usuario; (IV) elaborar datos estadísticos generales, sin identificar al usuario; (V) responder dudas y solicitudes del usuario; (VI) desarrollar campañas de marketing y comunicación, así como anunciar ofertas ó promociones; y (VII) notificar al usuario sobre novedades corporativas. Los datos proporcionados en el sitio web se mantendrán en nuestra base mientras sea necesario para nuestras operaciones, hasta que el usuario solicite su eliminación o hasta que retire la autorización para su uso.',
      point9_1:
        'El acceso a la información personal recolectada está restringido a empleados y personal autorizado de AutoRenta.com. Cualquier individuo que haga mal uso de estos datos y viole nuestras Políticas de Privacidad estarán sujeto a las sanciones aquí detalladas, además de las acciones legales pertinentes.',
      point10_1:
        'La información del usuario nunca será revelada a terceras personas, con la excepción de socios autorizados de AutoRenta.com. Adicionalmente, la información de usuario nunca será usada por AutoRenta.com para otros propósitos que los detallados aquí excepto si fuera por necesidad de orden judicial.',
      point11_1:
        'Por la presente, el usuario garantiza la veracidad y exactitud de la información personal proporcionada. AutoRenta.com no podría ser considerada responsable en el caso en el que la información fuese proporcionada errónea o falsamente por el usuario.',
      point12_1:
        'Los newsletters y promociones de marketing enviadas a través de E-mail permitirán al usuario la opción de darse de baja de recibir tales mensajes. Todas las solicitudes serán atendidas de forma automática.',
      point13_1:
        'Los servicios de E-mail marketing corren a cargo de una empresa tercerizada y contratada por AutoRenta.com, que usa sus propios servidores para enviar mensajes de E-mail marketing de nuestra parte.',
      point14_1:
        'Dicha compañía no almacena o usa la información de E-mail de los usuarios AutoRenta.com para otro propósito que no sea el envío de mensajes de acuerdo con las preferencias definidas por cada usuario en la página de AutoRenta.com.',
      point15_1:
        'El usuario será responsable de almacenar y salvaguardar su información de inicio de sesión. No recomendamos el uso de contraseñas fáciles, como fechas especiales, nombres o secuencias de números. Si el usuario sospechase que alguien pudiese haber obtenido conocimiento de su contraseña, ID de Agencia de Viajes o ID de Empresa / Compañía se recomienda cambiarla inmediatamente.',
      point16_1:
        'Si el usuario es informado por agentes externos sobre cualquier venta u oferta ofrecida por AutoRenta.com, el mismo deberá comprobar en nuestro sitio web la veracidad de la información. Cualquier información sobre ventas o servicios que no puedan ser confirmadas deberán ser desconsideradas.',
      point17_1:
        'Los datos recopilados solamente podrán ser utilizados para los propósitos descritos en esta Política de Privacidad.',
      point18_1: '2020 © AutoRenta.com. Todos los derechos reservados.',
    },
    cancellation: {
      title: 'Políticas de cancelación',
      subtitle: 'Nuestras políticas de cancelación varían según el tipo de reservación que haya realizado:',
      question1: '¿Qué sucede con los datos proporcionados a AutoRenta una vez realizado el pago de una reservación?',
      response1:
        'Tenga presente que cuando Usted informa a AutoRenta los datos de su cuenta o tarjeta de crédito (mediante el formulario disponible en la plataforma de pagos), y luego acepta o confirma la transacción, está autorizándonos a efectuar los cargos por: la tarifa base del servicio de alquiler contratado, tasas y/o percepciones fiscales que pudieran corresponder o cargos de penalidad aplicados por compañías arrendadoras – en caso de corresponder-.',
      question2: '¿Qué sucede cuando pago un importe expresado en dólares?',
      response2_1:
        'Los precios expresados en AutoRenta se encuentran siempre expresados en dólares estadounidences, el cargo se efectuará contra el cupo internacional de su tarjeta. En todo caso, cualquiera sea la moneda de cobro, la tarifa o precio será aquella que le fue informada y que fue aceptada por Usted. Recuerde que frente a operaciones internacionales, algunos bancos y empresas operadoras de tarjeta de crédito imponen ciertos cargos, además de impuestos, que podrían corresponder de acuerdo con la ley extranjera pertinente.',
      response2_2:
        'Adicionalmente, su banco podría convertir los precios a la divisa local y cobrar un cargo por conversión. Podría experimentar una variación entre el monto cobrado por el banco y el monto informado en nuestra plataforma. El banco es quien determina el tipo de cambio y la tarifa por transacción internacional. En caso de dudas sobre el tipo de cambio y tarifa aplicada en su reserva, póngase en contacto con su banco.',
      question3: '¿Ha prepagado y necesita cancelar su reserva?',
      response3_1:
        'Si desea cancelar cancelar la reservación antes de la hora de inicio, deberá buscar y cancelar la reserva y posteriormente solicitar un reembolso enviando un E-mail a info@autorenta.com. Una vez cancelada la reserva y solicitada la devolución, procesaremos el reembolso dentro de un plazo aproximado de 10 (diez) días hábiles.',
      response3_2:
        'El reembolso se realiza a través de nuestra pasarela de pago Stripe, y realizará a la misma tarjeta con la que prepagó la reserva original. Si bien AutoRenta no cobra penalidades por cancelaciones en sus reservas, las compañías arrendadoras pueden aplicar cargos o penalidades por cancelar a horas del inicio de la renta o pasada la hora de inicio de la misma. Consulte en cada caso.',
      response3_3:
        'En caso de devolución del vehículo antes de la fecha inicialmente pactada (devolución anticipada), no se realizará ningún reembolso por el periodo no usado.',
      question4: '¿Realizó una reserva de pago en destino (POD)?',
      response4:
        'En caso de haber realizado una reserva válida para pago en destino únicamente y ya no necesita rentar el vehículo, favor cancele su reserva lo antes posible antes de la hora programada de recogida. Para ello sólo necesita el número de reserva AutoRenta proporcionado a su E-mail al momento de hacer la reserva online. Si no conoce su número de reserva AutoRenta y necesitar cancelar por favor contactenos a info@autorenta.com',
      question5: '¿Realizó una reserva mediante una Agencia de Viajes o Agente de reservas online?',
      response5:
        'La Agencia de Viajes o el Agente de reservas online procesarán y gestionarán las devoluciones y cancelaciones de cualquier reservación realizada originalmente con ellos, por lo tanto, se aplican sus políticas y procesos de cancelación en las reservaciones. Deberá contactar a quien ha realizado la reservación para conocer sus políticas de devolución o penalidades en caso de aplicar.',
    },
    error: {
      message: 'Lo sentimos, ocurrió un error inesperado. Por favor inténtalo nuevamente.',
      access1_1: 'Lo sentimos, no tienes acceso al detalle de la reserva.',
      access1_2: 'Por favor contacta con tu Agencia de Viajes o Empresa / Compañía para ver los detalles de la misma.',
      canceled: 'Lo sentimos, la reserva que estás buscando se encuentra cancelada y no puede recuperarse.',
      goHome: 'Volver al inicio',
    },
  },
};
