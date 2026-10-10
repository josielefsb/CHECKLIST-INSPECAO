(() => {
    const commonSections = [
      {
        title: "Documentação e identificação",
        illustration: "documents",
        guidance: "Confira documentos, licenças e identificações do veículo e do operador.",
        items: [
          ["documents", "Documento do veículo/equipamento e licenças aplicáveis disponíveis e válidos"],
          ["identity-labels", "Placa, número de frota e identificação de segurança legíveis"],
          ["registration", "Identificação do chassi ou número de série confere com o registro"],
          ["operator-authorization", "Operador habilitado e autorizado para este veículo/equipamento"]
        ]
      },
      {
        title: "Estrutura, carroceria e rodagem",
        illustration: "structure",
        guidance: "Observe a estrutura, os acessos, os pneus e as rodas antes de iniciar.",
        items: [
          ["structure", "Chassi, carroceria e estrutura sem trincas, deformações ou danos aparentes"],
          ["doors-access", "Portas, travas, degraus, corrimãos e acessos firmes e funcionais"],
          ["glass-mirrors", "Para-brisa, vidros, espelhos e retrovisores limpos, íntegros e ajustados"],
          ["tires", "Pneus sem cortes, bolhas ou desgaste excessivo; calibragem adequada"],
          ["wheels", "Rodas, aros, porcas e parafusos sem danos e com fixação segura"],
          ["leaks-underbody", "Inspeção sob o veículo sem vazamentos ou peças soltas"]
        ]
      },
      {
        title: "Motor, fluidos e transmissão",
        illustration: "engine",
        guidance: "Verifique níveis, componentes, vazamentos e sinais de desgaste.",
        items: [
          ["engine-oil", "Nível do óleo do motor dentro da faixa recomendada"],
          ["coolant", "Nível do líquido de arrefecimento adequado e sem sinais de contaminação"],
          ["brake-fluid", "Fluido de freio dentro da faixa, quando aplicável"],
          ["fuel", "Combustível suficiente para a operação planejada; tampa e linhas sem vazamento"],
          ["belts-hoses", "Mangueiras, correias, conexões e radiador sem danos ou vazamentos"],
          ["battery", "Bateria e terminais firmes, limpos e sem corrosão excessiva"],
          ["transmission", "Transmissão e embreagem sem ruídos, trancos ou vazamento aparente"]
        ]
      },
      {
        title: "Freios, direção e controles",
        illustration: "controls",
        guidance: "Teste freios, direção e comandos em condições seguras.",
        items: [
          ["service-brake", "Freio de serviço com acionamento e resposta normais"],
          ["parking-brake", "Freio de estacionamento segura o veículo/equipamento"],
          ["steering", "Direção sem folga excessiva, travamento, ruído ou vibração anormal"],
          ["pedals-controls", "Pedais, alavancas e comandos retornam e funcionam adequadamente"]
        ]
      },
      {
        title: "Sistema elétrico e sinalização",
        illustration: "electrical",
        guidance: "Confira luzes, alertas, buzina e demais componentes elétricos.",
        items: [
          ["headlights", "Faróis alto e baixo acendem e estão regulados"],
          ["lights", "Lanternas, luzes de freio, ré e setas funcionam"],
          ["beacon-horn", "Buzina, alarme de ré e sinalizador luminoso funcionam, quando existentes"],
          ["dashboard", "Painel, indicadores e instrumentos sem alertas críticos"],
          ["wipers", "Limpadores, lavador do para-brisa e desembaçador funcionam"]
        ]
      },
      {
        title: "Cabine e equipamentos de segurança",
        illustration: "safety",
        guidance: "Confirme os equipamentos de proteção, emergência e acesso à cabine.",
        items: [
          ["seat-belt", "Cinto de segurança íntegro, trava e recolhimento funcionais"],
          ["seat-cabin", "Banco, encosto, cabine e comandos com fixação adequada"],
          ["fire-extinguisher", "Extintor presente, acessível, carregado e dentro da validade, quando exigido"],
          ["emergency-kit", "Triângulo, macaco, chave de roda e estepe disponíveis, quando aplicável"],
          ["safety-guards", "Proteções, tampas e dispositivos de segurança instalados e firmes"]
        ]
      },
      {
        title: "Partida e teste funcional",
        illustration: "test",
        guidance: "Faça a partida e o teste funcional em local seguro, observando ruídos e respostas.",
        items: [
          ["starting", "Partida normal, sem dificuldade ou ruído anormal"],
          ["idle-exhaust", "Motor em marcha lenta estável e escapamento sem fumaça ou ruído excessivo"],
          ["operational-test", "Teste funcional em local seguro sem vibração, ruído ou comportamento anormal"]
        ]
      }
    ];

    const typeSections = {
      car: [
        {
          title: "Verificações específicas — carro / utilitário",
          illustration: "car",
          guidance: "Revise os itens próprios de carros e utilitários, incluindo estepe, cintos e cabine.",
          items: [
            ["car-spare", "Estepe, macaco e chave de roda presentes e em condições de uso"],
            ["car-seatbelts", "Cintos de todos os assentos disponíveis e travando corretamente"],
            ["car-airbags", "Indicador do airbag apaga após a partida, quando equipado"],
            ["car-exhaust", "Sistema de escapamento fixo e sem vazamento aparente"],
            ["car-climate", "Ventilação, ar-condicionado e desembaçamento operacionais"],
            ["car-doors", "Capô, porta-malas, portas e vidros elétricos abrem e fecham adequadamente"]
          ]
        }
      ],
      truck: [
        {
          title: "Verificações específicas — caminhão / ônibus",
          illustration: "truck",
          guidance: "Confira o conjunto veicular, os sistemas pneumáticos, a carga e as saídas de emergência.",
          items: [
            ["truck-air-brake", "Sistema de ar comprimido sem vazamento e com pressão operacional"],
            ["truck-air-warning", "Avisos de baixa pressão e dispositivos de segurança pneumáticos funcionam"],
            ["truck-retarder", "Freio auxiliar, retardador ou freio motor operacional, quando equipado"],
            ["truck-fifth-wheel", "Quinta roda, pino-rei e travas sem dano e com acoplamento seguro"],
            ["truck-connections", "Mangueiras de ar e conexões elétricas do reboque íntegras e fixadas"],
            ["truck-trailer", "Reboque, engate, pés de apoio e sistema de iluminação verificados, quando aplicável"],
            ["truck-load", "Carga distribuída, acondicionada e amarrada sem risco de deslocamento"],
            ["truck-tachograph", "Tacógrafo e demais equipamentos obrigatórios presentes e operacionais"],
            ["truck-tires", "Pneus internos/externos, estepe e para-barros em condições seguras"],
            ["truck-mirrors", "Espelhos adicionais e câmeras de manobra limpos e funcionais"],
            ["truck-exit", "Saídas de emergência e martelos identificados e acessíveis em ônibus"],
            ["truck-coupling-test", "Acoplamento conferido e teste de freio do conjunto realizado em local seguro"]
          ]
        }
      ],
      machine: [
        {
          title: "Verificações específicas — máquina / equipamento",
          illustration: "machine",
          guidance: "Inspecione implementos, hidráulica, comandos, estabilizadores e área de trabalho.",
          items: [
            ["machine-hydraulics", "Nível do fluido hidráulico adequado; bomba, reservatório e filtros sem vazamento"],
            ["machine-hoses", "Mangueiras, cilindros, conexões e linhas hidráulicas sem abrasão ou dano"],
            ["machine-attachment", "Implemento, caçamba ou acessório compatível, travado e com pinos seguros"],
            ["machine-wear", "Dentes, lâmina, bordas cortantes e pontos de desgaste em condição operacional"],
            ["machine-undercarriage", "Esteiras, roletes, rodas-guia e sapatas sem dano ou tensão inadequada"],
            ["machine-outriggers", "Estabilizadores, patolas e travas firmes e operacionais, quando existentes"],
            ["machine-rops", "Estrutura ROPS/FOPS, cabine e proteções sem dano ou alteração"],
            ["machine-emergency-stop", "Parada de emergência e intertravamentos funcionam, quando equipados"],
            ["machine-controls", "Comandos de elevação, giro, deslocamento e implementos respondem corretamente"],
            ["machine-warning", "Alarme de ré, buzina, giroflex e sinalização sonora/visual funcionam"],
            ["machine-steps", "Pontos de apoio, degraus, corrimãos e plataforma sem óleo ou obstrução"],
            ["machine-work-area", "Área de trabalho e limites de operação verificados antes da movimentação"]
          ]
        }
      ]
    };

    const SECTION_ILLUSTRATIONS = {
      documents: '<svg viewBox="0 0 64 64"><path d="M17 8h22l10 10v37H17z"/><path d="M39 8v12h10M24 30h18M24 38h18M24 46h8"/><circle cx="47" cy="47" r="11" class="accent-fill"/><path d="m42 47 4 4 7-9" class="accent-stroke"/></svg>',
      structure: '<svg viewBox="0 0 64 64"><path d="M7 27h31v20H7zM38 33h11l8 9v5H38z"/><path d="M12 27l5-10h17l4 10"/><circle cx="19" cy="48" r="6"/><circle cx="48" cy="48" r="6"/><path d="M13 34h9M27 34h7" class="accent-stroke"/></svg>',
      engine: '<svg viewBox="0 0 64 64"><path d="M16 22h30v28H16zM46 30h8v14h-8M10 29h6M10 39h6M22 16v6M39 16v6M24 31l-5 9h9l-3 8 12-13h-9l3-4z"/><path d="M54 12v9M50 16h8" class="accent-stroke"/></svg>',
      controls: '<svg viewBox="0 0 64 64"><circle cx="31" cy="34" r="21"/><circle cx="31" cy="34" r="7"/><path d="M31 13v14M12 25l13 6M50 25l-13 6M17 49l10-10M45 49 35 39"/><path d="M48 12h9v9" class="accent-stroke"/></svg>',
      electrical: '<svg viewBox="0 0 64 64"><path d="M35 7 17 35h13l-3 22 21-31H35z" class="accent-fill"/><path d="M35 7 17 35h13l-3 22 21-31H35z" class="accent-stroke"/><path d="M9 15h10M6 22h8M48 12l6-5M51 20h8"/></svg>',
      safety: '<svg viewBox="0 0 64 64"><path d="M32 7 52 15v15c0 13-8 22-20 28C20 52 12 43 12 30V15z"/><path d="m22 32 7 7 14-16" class="accent-stroke"/></svg>',
      test: '<svg viewBox="0 0 64 64"><circle cx="32" cy="34" r="22"/><path d="M32 12v6M10 34h6M48 34h6M32 34l12-10"/><path d="M27 42V26l14 8z" class="accent-fill"/><path d="M27 42V26l14 8z" class="accent-stroke"/></svg>',
      car: '<svg viewBox="0 0 64 64"><path d="M9 35l4-13h37l6 13v14H9zM13 35h42M18 22l5-9h18l8 9"/><circle cx="19" cy="49" r="5"/><circle cx="47" cy="49" r="5"/><path d="M18 29h10M36 29h10" class="accent-stroke"/></svg>',
      truck: '<svg viewBox="0 0 64 64"><path d="M6 18h32v29H6zM38 27h11l9 10v10H38z"/><path d="M43 28v10h14M12 24h20M12 31h15" class="accent-stroke"/><circle cx="17" cy="49" r="5"/><circle cx="48" cy="49" r="5"/></svg>',
      machine: '<svg viewBox="0 0 64 64"><path d="M8 44h27l5 8H13zM18 43V29h17v15M20 29l2-9h11l3 9M35 31l8-10 7 4-8 13M48 25l8 5-5 9-8-5M17 51h30"/><circle cx="22" cy="46" r="4" class="accent-fill"/><circle cx="33" cy="46" r="4" class="accent-fill"/><path d="m42 20 5-7 6 4" class="accent-stroke"/></svg>'
    };

    const ESSENTIAL_ITEM_IDS = new Set([
      "operator-authorization", "structure", "glass-mirrors", "tires", "wheels",
      "leaks-underbody", "engine-oil", "coolant", "brake-fluid", "fuel", "belts-hoses",
      "service-brake", "parking-brake", "steering", "pedals-controls", "headlights",
      "lights", "dashboard", "seat-belt", "safety-guards", "starting", "idle-exhaust",
      "operational-test", "car-seatbelts", "car-airbags", "car-exhaust",
      "truck-air-brake", "truck-air-warning", "truck-fifth-wheel", "truck-connections",
      "truck-load", "truck-tires", "truck-exit", "truck-coupling-test",
      "machine-hydraulics", "machine-hoses", "machine-attachment", "machine-undercarriage",
      "machine-outriggers", "machine-rops", "machine-emergency-stop", "machine-controls",
      "machine-warning", "machine-steps", "machine-work-area"
    ]);

    const DRAFT_KEY = "frota-checklist-draft-v1";
    const HISTORY_KEY = "frota-checklist-history-v1";
    const VEHICLES_KEY = "frota-checklist-vehicles-v1";
    const OPERATORS_KEY = "frota-checklist-operators-v1";
    const EDIT_LOCK_MS = 5 * 60 * 1000;
    const statusNames = { ok: "Conforme", fail: "Não conforme", na: "N/A" };
    const notice = document.getElementById("notice");
    const supabaseConfig = window.SUPABASE_CONFIG || {};
    const supabaseReady = Boolean(window.supabase && supabaseConfig.url && supabaseConfig.anonKey && !supabaseConfig.url.includes("SEU-PROJETO") && !supabaseConfig.anonKey.includes("SUA_CHAVE"));
    const supabaseClient = supabaseReady ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey) : null;
    let authUser = null;
    let cloudSaveTimer = null;
    let draft = readDraft();
    let history = readHistory();
    let vehicles = readVehicles();
    let operators = readOperators();
    let reviewSectionIndex = null;
    let currentRole = "manager";
    let editingVehicleId = null;

    function showNotice(message) {
      notice.textContent = message;
      notice.hidden = false;
    }

    function readJson(key, fallback, validate) {
      let raw;
      try {
        raw = localStorage.getItem(key);
      } catch (error) {
        showNotice(`Não foi possível acessar o armazenamento local do navegador: ${error.message}`);
        return fallback;
      }
      if (raw === null) return fallback;
      try {
        const parsed = JSON.parse(raw);
        if (validate(parsed)) return parsed;
        showNotice("Um registro salvo está em formato inválido e não pôde ser carregado.");
        return fallback;
      } catch (error) {
        showNotice(`Um registro salvo não pôde ser lido: ${error.message}`);
        return fallback;
      }
    }

    function readDraft() {
      return readJson(DRAFT_KEY, createDraft(), (value) =>
        value && typeof value === "object" && typeof value.openedAt === "string" &&
        value.vehicle && typeof value.vehicle === "object" && value.answers && typeof value.answers === "object"
      );
    }

    function readHistory() {
      return readJson(HISTORY_KEY, [], Array.isArray);
    }

    function readVehicles() {
      return readJson(VEHICLES_KEY, [], (value) =>
        Array.isArray(value) && value.every((vehicle) =>
          vehicle && typeof vehicle.id === "string" && typeof vehicle.type === "string" &&
          vehicle.details && typeof vehicle.details === "object"
        )
      );
    }

    function readOperators() {
      return readJson(OPERATORS_KEY, [], (value) =>
        Array.isArray(value) && value.every((operator) =>
          operator && typeof operator.id === "string" && typeof operator.name === "string"
        )
      );
    }

    function newId() {
      return typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }

    function normalize(value) {
      return value.trim().toLocaleLowerCase("pt-BR");
    }

    function vehicleIdentity(vehicle) {
      for (const field of ["serialNumber", "plate", "fleetNumber"]) {
        const value = vehicle[field]?.trim();
        if (value) return { field, value: normalize(value) };
      }
      return null;
    }

    function vehicleIsActive(vehicle) {
      return vehicle.active !== false;
    }

    function findSavedVehicle(vehicle) {
      for (const field of ["serialNumber", "plate", "fleetNumber"]) {
        const value = vehicle[field]?.trim();
        if (!value) continue;
        const match = vehicles.find((saved) =>
          saved.type === vehicle.type &&
          normalize(saved.details[field] || "") === normalize(value)
        );
        if (match) return match;
      }
      return null;
    }

    function renderRegistries() {
      const vehicleSelect = document.getElementById("saved-vehicle");
      const selectedVehicle = vehicleSelect.value;
      vehicleSelect.replaceChildren();
      const vehicleOptions = [["", vehicles.some(vehicleIsActive) ? "Selecione um veículo ativo" : "Nenhum veículo ativo — solicite o cadastro à gerência"]];
      if (currentRole === "manager") vehicleOptions.push(["__new__", "+ Informar / cadastrar veículo"]);
      vehicleOptions.forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        vehicleSelect.append(option);
      });
      vehicles.filter((vehicle) => vehicleIsActive(vehicle) && (!document.getElementById("vehicle-type").value || vehicle.type === document.getElementById("vehicle-type").value)).forEach((vehicle) => {
        const option = document.createElement("option");
        option.value = vehicle.id;
        const identifiers = [vehicle.details.plate, vehicle.details.fleetNumber, vehicle.details.serialNumber].filter(Boolean);
        option.textContent = `${vehicleName({ ...vehicle.details, type: vehicle.type })}${vehicle.details.makeModel ? ` · ${vehicle.details.makeModel}` : ""}${identifiers.length > 1 ? ` · ${vehicle.details.serialNumber || vehicle.details.fleetNumber}` : ""}`;
        vehicleSelect.append(option);
      });
      vehicleSelect.value = vehicles.some((vehicle) => vehicle.id === selectedVehicle && vehicleIsActive(vehicle))
        ? selectedVehicle
        : (selectedVehicle === "__new__" ? "__new__" : ((vehicles.find((vehicle) => vehicle.id === findSavedVehicle(draft.vehicle)?.id && vehicleIsActive(vehicle))?.id) || (vehicleIdentity(draft.vehicle) ? "__new__" : "")));

      const operatorSelect = document.getElementById("saved-operator");
      const selectedOperator = operatorSelect.value;
      operatorSelect.replaceChildren();
      [
        ["", "Selecione um operador salvo"],
        ["__new__", "+ Cadastrar novo operador"]
      ].forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        operatorSelect.append(option);
      });
      operators
        .slice()
        .sort((first, second) => first.name.localeCompare(second.name, "pt-BR"))
        .forEach((operator) => {
          const option = document.createElement("option");
          option.value = operator.id;
          option.textContent = operator.name;
          operatorSelect.append(option);
        });
      operatorSelect.value = operators.some((operator) => operator.id === selectedOperator)
        ? selectedOperator
        : (selectedOperator === "__new__" ? "__new__" : (operators.find((operator) => normalize(operator.name) === normalize(draft.operator || ""))?.id || (draft.operator ? "__new__" : "")));

      const locked = isDraftLocked();
      vehicleSelect.disabled = locked;
      operatorSelect.disabled = locked;
      document.getElementById("save-vehicle").disabled = locked;
      document.getElementById("save-vehicle").hidden = currentRole !== "manager";
      document.getElementById("save-operator").disabled = locked;
      const protectedVehicleFields = new Set(["plate", "fleetNumber", "serialNumber", "makeModel", "color"]);
      document.querySelectorAll("[data-vehicle-field]").forEach((input) => {
        input.readOnly = currentRole === "collaborator" && protectedVehicleFields.has(input.dataset.vehicleField);
      });
    }

    function renderManagedVehicles() {
      const container = document.getElementById("managed-vehicle-list");
      container.replaceChildren();
      if (!vehicles.length) {
        const empty = document.createElement("div");
        empty.className = "managed-vehicle-empty";
        empty.textContent = "Nenhum veículo cadastrado. Use “Novo veículo” para incluir o primeiro.";
        container.append(empty);
        return;
      }
      vehicles.slice().sort((first, second) => vehicleName({ ...first.details, type: first.type }).localeCompare(vehicleName({ ...second.details, type: second.type }), "pt-BR")).forEach((vehicle) => {
        const entry = document.createElement("div");
        entry.className = `managed-vehicle-entry${vehicleIsActive(vehicle) ? "" : " inactive"}`;
        const copy = document.createElement("div");
        copy.className = "managed-vehicle-copy";
        const name = document.createElement("strong");
        name.textContent = `${vehicleName({ ...vehicle.details, type: vehicle.type })}${vehicle.details.makeModel ? ` · ${vehicle.details.makeModel}` : ""}`;
        const info = document.createElement("span");
        info.textContent = [vehicle.details.plate, vehicle.details.fleetNumber && `Frota ${vehicle.details.fleetNumber}`, vehicle.details.serialNumber && `Série ${vehicle.details.serialNumber}`, vehicle.details.color].filter(Boolean).join(" · ") || "Sem identificadores adicionais";
        const state = document.createElement("span");
        state.className = `managed-vehicle-state${vehicleIsActive(vehicle) ? "" : " inactive-state"}`;
        state.textContent = vehicleIsActive(vehicle) ? "Ativo · disponível para inspeção" : "Inativo · indisponível para seleção";
        copy.append(name, info, state);
        const actions = document.createElement("div");
        actions.className = "managed-vehicle-actions";
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "button";
        editButton.textContent = "Editar";
        editButton.addEventListener("click", () => showManagedVehicleForm(vehicle));
        const activeButton = document.createElement("button");
        activeButton.type = "button";
        activeButton.className = "button";
        activeButton.textContent = vehicleIsActive(vehicle) ? "Desativar" : "Ativar";
        activeButton.addEventListener("click", () => setManagedVehicleActive(vehicle.id, !vehicleIsActive(vehicle)));
        actions.append(editButton, activeButton);
        entry.append(copy, actions);
        container.append(entry);
      });
    }

    const managedVehicleForm = document.getElementById("managed-vehicle-form");
    const managedVehicleFields = {
      type: "managed-type", plate: "managed-plate", fleetNumber: "managed-fleet",
      serialNumber: "managed-serial", makeModel: "managed-make-model", color: "managed-color",
      reading: "managed-reading", location: "managed-location"
    };

    function showManagedVehicleForm(vehicle = null) {
      if (currentRole !== "manager") return;
      editingVehicleId = vehicle?.id || null;
      document.getElementById("managed-vehicle-form-heading").textContent = vehicle ? "Editar veículo" : "Cadastrar veículo";
      document.getElementById("managed-vehicle-error").hidden = true;
      Object.entries(managedVehicleFields).forEach(([key, id]) => {
        const value = key === "type" ? vehicle?.type : vehicle?.details?.[key];
        document.getElementById(id).value = value || "";
      });
      managedVehicleForm.hidden = false;
      managedVehicleForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
      document.getElementById("managed-type").focus();
    }

    function setManagedVehicleActive(vehicleId, active) {
      if (currentRole !== "manager") return;
      const nextVehicles = vehicles.map((vehicle) => vehicle.id === vehicleId ? { ...vehicle, active } : vehicle);
      if (!saveRegistry(VEHICLES_KEY, nextVehicles)) return;
      vehicles = nextVehicles;
      renderManagedVehicles();
      renderRegistries();
      showNotice(active ? "Veículo ativado e disponível para novas inspeções." : "Veículo inativado e removido das opções de novas inspeções.");
    }

    function saveManagedVehicle(event) {
      event.preventDefault();
      if (currentRole !== "manager") return;
      const details = Object.fromEntries(Object.entries(managedVehicleFields).filter(([key]) => key !== "type").map(([key, id]) => [key, document.getElementById(id).value.trim()]));
      const type = document.getElementById("managed-type").value;
      const errorElement = document.getElementById("managed-vehicle-error");
      errorElement.hidden = true;
      if (!type) {
        errorElement.textContent = "Selecione o tipo do veículo ou equipamento.";
        errorElement.hidden = false;
        return;
      }
      if (!details.plate && !details.fleetNumber && !details.serialNumber) {
        errorElement.textContent = "Informe placa, frota/patrimônio ou número de série/chassi.";
        errorElement.hidden = false;
        return;
      }
      const existing = vehicles.find((vehicle) => vehicle.id === editingVehicleId);
      const duplicate = findSavedVehicle({ ...details, type });
      if (duplicate && duplicate.id !== editingVehicleId) {
        errorElement.textContent = "Já existe um veículo do mesmo tipo com essa placa, frota ou número de série.";
        errorElement.hidden = false;
        return;
      }
      const savedVehicle = { id: existing?.id || newId(), type, details, active: existing ? vehicleIsActive(existing) : true };
      const nextVehicles = existing
        ? vehicles.map((vehicle) => vehicle.id === existing.id ? savedVehicle : vehicle)
        : [...vehicles, savedVehicle];
      if (!saveRegistry(VEHICLES_KEY, nextVehicles)) return;
      vehicles = nextVehicles;
      renderManagedVehicles();
      renderRegistries();
      managedVehicleForm.reset();
      managedVehicleForm.hidden = true;
      editingVehicleId = null;
      showNotice(existing ? "Cadastro do veículo atualizado." : "Veículo cadastrado e ativo para inspeções.");
    }

    function saveRegistry(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        if (supabaseClient && authUser) queueCloudSave();
        return true;
      } catch (error) {
        showNotice(`Não foi possível salvar o cadastro no navegador: ${error.message}`);
        return false;
      }
    }

    function createDraft() {
      return {
        id: newId(),
        openedAt: new Date().toISOString(),
        finalizedAt: null,
        operator: "",
        comment: "",
        vehicle: { type: "", plate: "", fleetNumber: "", serialNumber: "", makeModel: "", color: "", reading: "", location: "" },
        answers: {}
      };
    }

    function save(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        if (supabaseClient && authUser) queueCloudSave();
        document.getElementById("save-state").textContent = `Salvo automaticamente às ${new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date())}`;
        return true;
      } catch (error) {
        showNotice(`Não foi possível salvar no navegador: ${error.message}. Imprima o relatório para não perder as informações.`);
        document.getElementById("save-state").textContent = "Falha ao salvar — imprima uma cópia";
        return false;
      }
    }

    function queueCloudSave() {
      window.clearTimeout(cloudSaveTimer);
      cloudSaveTimer = window.setTimeout(() => syncCurrentInspection().catch((error) => showNotice(`Falha ao sincronizar com Supabase: ${error.message}`)), 700);
    }

    function inspectionFromRow(row) {
      const vehicleData = row.dados_veiculo || {};
      const type = ({ carro: "car", caminhao: "truck", maquina: "machine" })[vehicleData.tipo] || "";
      const answers = {};
      (row.itens_inspecao || []).forEach((item) => {
        if (item.resposta) answers[item.codigo_item] = { status: ({ ok: "ok", nao_conforme: "fail", na: "na" })[item.resposta], note: item.observacao || "" };
      });
      return { id: row.id, openedAt: row.aberto_em, finalizedAt: row.finalizado_em, editedAt: row.editado_em, operator: row.nome_operador, comment: row.comentario_geral || "", aptitude: ({ apto: "fit", nao_apto: "unfit", pendente: "pending" })[row.aptidao], vehicle: { type, plate: vehicleData.placa || "", fleetNumber: vehicleData.numero_frota || "", serialNumber: vehicleData.numero_serie || "", makeModel: vehicleData.marca_modelo || "", color: vehicleData.cor || "", reading: row.leitura == null ? "" : String(row.leitura), location: row.local_inspecao || "" }, answers };
    }

    async function syncCurrentInspection() {
      if (!supabaseClient || !authUser) return;
      const typeMap = { car: "carro", truck: "caminhao", machine: "maquina" };
      const statusMap = { ok: "ok", fail: "nao_conforme", na: "na" };
      const vehicleRows = vehicles.map((entry) => ({ id: entry.id, tipo: typeMap[entry.type], placa: entry.details.plate || null, numero_frota: entry.details.fleetNumber || null, numero_serie: entry.details.serialNumber || null, marca_modelo: entry.details.makeModel || null, cor: entry.details.color || null, ativo: vehicleIsActive(entry), criado_por: authUser.id }));
      if (currentRole === "manager" && vehicleRows.length) { const { error: vehicleError } = await supabaseClient.from("veiculos").upsert(vehicleRows, { onConflict: "id" }); if (vehicleError) throw vehicleError; }
      const operatorRows = operators.map((entry) => ({ id: entry.id, nome: entry.name, ativo: true, criado_por: authUser.id }));
      if (operatorRows.length) { const { error: operatorError } = await supabaseClient.from("operadores").upsert(operatorRows, { onConflict: "id", ignoreDuplicates: true }); if (operatorError) throw operatorError; }
      if (!draft.vehicle.type || !draft.operator.trim()) return;
      const vehicle = findSavedVehicle(draft.vehicle);
      const { data: inspection, error } = await supabaseClient.from("inspecoes").upsert({
        id: draft.id, situacao: draft.finalizedAt ? "concluida" : "rascunho",
        veiculo_id: vehicle?.id || null,
        dados_veiculo: { tipo: typeMap[draft.vehicle.type], placa: draft.vehicle.plate, numero_frota: draft.vehicle.fleetNumber, numero_serie: draft.vehicle.serialNumber, marca_modelo: draft.vehicle.makeModel, cor: draft.vehicle.color },
        operador_usuario_id: authUser.id, nome_operador: draft.operator,
        aberto_em: draft.openedAt, finalizado_em: draft.finalizedAt || null,
        editado_em: draft.editedAt || null, leitura: Number(draft.vehicle.reading) || null,
        unidade_leitura: draft.vehicle.type === "machine" ? "horas" : "km",
        local_inspecao: draft.vehicle.location || null, comentario_geral: draft.comment || null,
        aptidao: ({ fit: "apto", unfit: "nao_apto", pending: "pendente" })[draft.aptitude] || "pendente"
      }, { onConflict: "id" }).select("id").single();
      if (error) throw error;
      const items = itemsForType(draft.vehicle.type).map((item, index) => ({
        inspecao_id: inspection.id, codigo_item: item.id, titulo_secao: item.section,
        descricao_item: item.label, essencial: item.essential, obrigatorio: true, ordem: index,
        resposta: statusMap[draft.answers[item.id]?.status] || null,
        observacao: draft.answers[item.id]?.note || null,
        respondido_em: draft.answers[item.id]?.status ? new Date().toISOString() : null
      }));
      const { error: itemError } = await supabaseClient.from("itens_inspecao").upsert(items, { onConflict: "inspecao_id,codigo_item" });
      if (itemError) throw itemError;
    }

    function saveDraft() {
      if (draft.finalizedAt && !isDraftLocked()) {
        draft.aptitude = calculateAptitude().status;
        draft.editedAt = new Date().toISOString();
      }
      const draftSaved = save(DRAFT_KEY, draft);
      if (draft.finalizedAt && !isDraftLocked()) {
        const index = history.findIndex((record) => record.id === draft.id);
        const updatedRecord = JSON.parse(JSON.stringify(draft));
        if (index >= 0) history[index] = updatedRecord;
        else history.unshift(updatedRecord);
        const historySaved = save(HISTORY_KEY, history);
        return draftSaved && historySaved;
      }
      return draftSaved;
    }

    function isDraftLocked() {
      if (!draft.finalizedAt) return false;
      const finalizedTime = Date.parse(draft.finalizedAt);
      return !Number.isFinite(finalizedTime) || Date.now() - finalizedTime < EDIT_LOCK_MS;
    }

    function updateLockedNote() {
      const note = document.getElementById("locked-note");
      const finalizedTime = Date.parse(draft.finalizedAt);
      const remaining = Number.isFinite(finalizedTime) ? Math.max(0, EDIT_LOCK_MS - (Date.now() - finalizedTime)) : EDIT_LOCK_MS;
      if (isDraftLocked()) {
        const minutes = Math.floor(remaining / 60000).toString().padStart(2, "0");
        const seconds = Math.ceil((remaining % 60000) / 1000).toString().padStart(2, "0");
        document.getElementById("locked-note-text").textContent = `Checklist finalizado. A edição será liberada em ${minutes}:${seconds}. Você também pode excluí-lo.`;
      } else {
        document.getElementById("locked-note-text").textContent = "Prazo de bloqueio encerrado. Este checklist pode ser editado; as alterações atualizam o registro no histórico automaticamente.";
      }
      note.hidden = !draft.finalizedAt;
    }

    function scheduleEditUnlock() {
      if (window.editUnlockTimer) window.clearTimeout(window.editUnlockTimer);
      if (window.editCountdownTimer) window.clearInterval(window.editCountdownTimer);
      if (!draft.finalizedAt || !isDraftLocked()) return;
      const finalizedTime = Date.parse(draft.finalizedAt);
      if (!Number.isFinite(finalizedTime)) return;
      const delay = Math.max(0, EDIT_LOCK_MS - (Date.now() - finalizedTime));
      window.editCountdownTimer = window.setInterval(updateLockedNote, 1000);
      window.editUnlockTimer = window.setTimeout(() => {
        if (!draft.finalizedAt || isDraftLocked()) return scheduleEditUnlock();
        window.clearInterval(window.editCountdownTimer);
        renderChecklist();
        renderRegistries();
        updateLockedNote();
        showNotice("Os cinco minutos de bloqueio terminaram. O checklist agora pode ser editado.");
      }, delay + 50);
    }

    async function compressPhoto(file) {
      if (!file.type.startsWith("image/")) {
        throw new Error("Escolha um arquivo de imagem.");
      }
      if (file.size > 8 * 1024 * 1024) {
        throw new Error("A foto deve ter no máximo 8 MB antes da compactação.");
      }
      if (typeof createImageBitmap !== "function") {
        throw new Error("Este navegador não oferece suporte ao processamento de fotos.");
      }

      const image = await createImageBitmap(file);
      const scale = Math.min(1, 1000 / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      image.close();

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.68));
      if (!blob) throw new Error("Não foi possível compactar a foto.");
      if (blob.size > 300 * 1024) {
        throw new Error("A foto compactada ainda é grande demais. Escolha uma imagem menor.");
      }
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result));
        reader.addEventListener("error", () => reject(new Error("Não foi possível ler a foto selecionada.")));
        reader.readAsDataURL(blob);
      });
    }

    function sectionsForType(type) {
      if (!type || !typeSections[type]) return [];
      return [...commonSections, ...typeSections[type]];
    }

    function allSections() {
      return sectionsForType(draft.vehicle.type);
    }

    function itemsForType(type) {
      return sectionsForType(type).flatMap((section) => section.items.map(([id, label]) => ({
        id,
        label,
        section: section.title,
        essential: ESSENTIAL_ITEM_IDS.has(id)
      })));
    }

    function allItems() {
      return itemsForType(draft.vehicle.type);
    }

    function itemIsComplete(id) {
      const answer = draft.answers[id];
      return Boolean(answer?.status) && (answer.status !== "fail" || Boolean(answer.note?.trim()));
    }

    function sectionIsComplete(section) {
      return section.items.every(([id]) => itemIsComplete(id));
    }

    function firstIncompleteSection(sections) {
      return sections.findIndex((section) => !sectionIsComplete(section));
    }

    function calculateAptitude() {
      const items = allItems();
      const essentialItems = items.filter(({ essential }) => essential);
      const unconfirmedEssential = essentialItems.filter(({ id }) => draft.answers[id]?.status !== "ok").length;
      const criticalFailures = essentialItems.filter(({ id }) => draft.answers[id]?.status === "fail");
      if (!essentialItems.length) {
        return { status: "pending", missingCount: 0, criticalFailures, remainingCount: 0 };
      }
      if (criticalFailures.length) {
        return { status: "unfit", missingCount: unconfirmedEssential, criticalFailures, remainingCount: items.filter(({ id }) => !draft.answers[id]?.status).length };
      }
      if (unconfirmedEssential) {
        return { status: "pending", missingCount: unconfirmedEssential, criticalFailures, remainingCount: items.filter(({ id }) => !draft.answers[id]?.status).length };
      }
      return {
        status: "fit",
        missingCount: 0,
        criticalFailures,
        remainingCount: items.filter(({ id }) => !draft.answers[id]?.status).length
      };
    }

    function formatDate(value) {
      if (!value) return "—";
      const date = new Date(value);
      const dateText = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
      const timeText = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(date);
      return `${dateText} às ${timeText}`;
    }

    function vehicleName(vehicle) {
      const typeNames = { car: "Carro / utilitário", truck: "Caminhão / ônibus", machine: "Máquina / equipamento" };
      const identifier = vehicle.plate || vehicle.fleetNumber || vehicle.serialNumber || "Sem identificação";
      return `${typeNames[vehicle.type] || "Veículo"} · ${identifier}`;
    }

    function setInputValues() {
      document.getElementById("vehicle-type").value = draft.vehicle.type || "";
      document.getElementById("operator").value = draft.operator || "";
      document.getElementById("checklist-id").value = draft.id || "—";
      document.getElementById("opened-at").value = formatDate(draft.openedAt);
      document.getElementById("general-comment").value = draft.comment || "";
      document.querySelectorAll("[data-vehicle-field]").forEach((input) => {
        input.value = draft.vehicle[input.dataset.vehicleField] || "";
      });
      const savedOperator = operators.find((operator) => normalize(operator.name) === normalize(draft.operator || ""));
      document.getElementById("saved-operator").value = savedOperator?.id || (draft.operator ? "__new__" : "");
      const savedVehicle = findSavedVehicle(draft.vehicle);
      document.getElementById("saved-vehicle").value = savedVehicle?.id || (vehicleIdentity(draft.vehicle) ? "__new__" : "");
      const readingLabel = document.getElementById("reading-label");
      readingLabel.textContent = draft.vehicle.type === "machine" ? "Horímetro" : "Quilometragem / horímetro";
      document.getElementById("reading").placeholder = draft.vehicle.type === "machine" ? "Horas de operação" : "Leitura atual";
    }

    function renderChecklist() {
      const content = document.getElementById("checklist-content");
      const empty = document.getElementById("empty-checklist");
      const container = document.getElementById("inspection-groups");
      const sections = allSections();
      const locked = isDraftLocked();
      const incompleteIndex = firstIncompleteSection(sections);
      const activeIndex = reviewSectionIndex !== null && reviewSectionIndex < sections.length
        ? reviewSectionIndex
        : (incompleteIndex === -1 ? null : incompleteIndex);
      if (activeIndex === null) reviewSectionIndex = null;

      content.hidden = !sections.length;
      empty.hidden = Boolean(sections.length);
      updateLockedNote();
      document.getElementById("step-progress").hidden = !sections.length || activeIndex === null;
      document.getElementById("continue-checklist").hidden = reviewSectionIndex === null;
      document.getElementById("all-steps-done").hidden = !sections.length || incompleteIndex !== -1 || reviewSectionIndex !== null;
      document.getElementById("general-comment").closest(".general-comment").hidden = !sections.length || incompleteIndex !== -1;
      if (!sections.length) {
        container.replaceChildren();
        updateSummary();
        return;
      }

      container.replaceChildren();
      if (activeIndex !== null) {
        document.getElementById("step-progress-title").textContent = reviewSectionIndex !== null
          ? `Revisando etapa ${activeIndex + 1} de ${sections.length}`
          : `Etapa ${activeIndex + 1} de ${sections.length}`;
        document.getElementById("step-progress-hint").textContent = reviewSectionIndex !== null
          ? "Você está revisando uma etapa já concluída. Volte ao checklist para continuar."
        : "Responda cada item e descreva as falhas para liberar a próxima etapa.";
      }

      sections.forEach((section, index) => {
        const answeredCount = section.items.filter(([id]) => itemIsComplete(id)).length;
        const sectionComplete = sectionIsComplete(section);
        if (!sectionComplete && index > activeIndex) return;

        const group = document.createElement("section");
        const showItems = !sectionComplete || index === activeIndex;
        group.className = `group${showItems ? " is-current" : " is-completed"}`;
        const title = document.createElement("div");
        title.className = "group-title";
        const titleMain = document.createElement("div");
        titleMain.className = "group-title-main";
        const illustration = document.createElement("span");
        illustration.className = `section-illustration section-illustration-${section.illustration || "documents"}`;
        illustration.setAttribute("aria-hidden", "true");
        illustration.innerHTML = SECTION_ILLUSTRATIONS[section.illustration] || SECTION_ILLUSTRATIONS.documents;
        const titleCopy = document.createElement("div");
        titleCopy.className = "group-title-copy";
        const stepLabel = document.createElement("span");
        stepLabel.className = "group-step";
        stepLabel.textContent = `Etapa ${index + 1} de ${sections.length}${sectionComplete ? " · Concluída" : ""}`;
        const heading = document.createElement("span");
        heading.textContent = section.title;
        const guidance = document.createElement("span");
        guidance.className = "group-guidance";
        guidance.textContent = section.guidance || "Revise os itens desta etapa e registre qualquer condição fora do esperado.";
        titleCopy.append(stepLabel, heading, guidance);
        titleMain.append(illustration, titleCopy);
        const count = document.createElement("span");
        count.className = "group-count";
        count.textContent = `${answeredCount}/${section.items.length} respondidos`;
        const titleActions = document.createElement("div");
        titleActions.className = "group-title-actions";
        titleActions.append(count);
        if (sectionComplete && index !== activeIndex) {
          const reviewButton = document.createElement("button");
          reviewButton.type = "button";
          reviewButton.className = "review-step";
          reviewButton.textContent = "Revisar etapa";
          reviewButton.addEventListener("click", () => {
            reviewSectionIndex = index;
            renderChecklist();
            document.getElementById("inspection-heading").scrollIntoView({ behavior: "smooth", block: "start" });
          });
          titleActions.append(reviewButton);
        }
        title.append(titleMain, titleActions);
        group.append(title);

        if (!showItems) {
          container.append(group);
          return;
        }

        section.items.forEach(([id, label]) => {
          const answer = draft.answers[id] || {};
          const essential = ESSENTIAL_ITEM_IDS.has(id);
          const row = document.createElement("div");
          row.className = `inspection-item${answer.status === "fail" ? " has-failure" : ""}${answer.status === "fail" && essential ? " has-critical-failure" : ""}`;
          row.dataset.itemId = id;
          const copy = document.createElement("div");
          copy.className = "item-copy";
          const name = document.createElement("span");
          name.className = "item-name";
          name.textContent = label;
          copy.append(name);
          if (essential) {
            const criticalLabel = document.createElement("span");
            criticalLabel.className = "critical-label";
            criticalLabel.textContent = "Requisito essencial para operação";
            copy.append(criticalLabel);
          }
          if (answer.status === "fail" && !answer.note?.trim()) {
            const hint = document.createElement("span");
            hint.className = "item-note-hint";
            hint.textContent = "Descreva a não conformidade";
            copy.append(hint);
          }

          const options = document.createElement("div");
          options.className = "status-options";
          options.setAttribute("role", "group");
          options.setAttribute("aria-label", `Situação: ${label}`);
          [["ok", "✓ Conforme"], ["fail", "! Não conforme"], ["na", "— N/A"]].forEach(([value, text]) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "status-button";
            button.dataset.status = value;
            button.dataset.itemId = id;
            button.textContent = text;
            button.setAttribute("aria-pressed", String(answer.status === value));
            button.disabled = locked;
            button.addEventListener("click", () => {
              draft.answers[id] = {
                ...draft.answers[id],
                status: value,
                note: value === "fail" ? (draft.answers[id]?.note || "") : "",
                photo: value === "fail" ? (draft.answers[id]?.photo || "") : ""
              };
              reviewSectionIndex = null;
              saveDraft();
              renderChecklist();
              document.querySelector(`.status-button[data-item-id="${id}"][data-status="${value}"]`)?.focus();
            });
            options.append(button);
          });

          row.append(copy, options);
          if (answer.status === "fail") {
            const noteField = document.createElement("div");
            noteField.className = "field observation";
            const noteLabel = document.createElement("label");
            noteLabel.textContent = "Descreva a falha observada";
            noteLabel.htmlFor = `note-${id}`;
            const note = document.createElement("textarea");
            note.id = `note-${id}`;
            note.maxLength = 500;
            note.placeholder = "Informe o problema, localização e qualquer detalhe importante.";
            note.value = answer.note || "";
            note.required = true;
            note.disabled = locked;
            note.addEventListener("input", () => {
              draft.answers[id].note = note.value;
              saveDraft();
              updateSummary();
            });
            note.addEventListener("change", renderChecklist);
            noteField.append(noteLabel, note);

            const photoLabel = document.createElement("label");
            photoLabel.className = "photo-field";
            const photoLabelText = document.createElement("span");
            photoLabelText.textContent = "Foto da não conformidade (opcional)";
            const photoInput = document.createElement("input");
            photoInput.type = "file";
            photoInput.accept = "image/*";
            photoInput.setAttribute("capture", "environment");
            photoInput.disabled = locked;
            const photoHint = document.createElement("span");
            photoHint.className = "photo-hint";
            photoHint.textContent = "A foto será compactada e anexada a este item.";
            photoInput.addEventListener("change", async () => {
              const file = photoInput.files?.[0];
              if (!file) return;
              photoInput.disabled = true;
              try {
                draft.answers[id].photo = await compressPhoto(file);
                if (!saveDraft()) return;
                renderChecklist();
                document.querySelector(`.inspection-item[data-item-id="${id}"] .photo-field input`)?.focus();
              } catch (error) {
                showNotice(`Não foi possível anexar a foto: ${error.message}`);
                photoInput.disabled = locked;
                photoInput.value = "";
              }
            });
            photoLabel.append(photoLabelText, photoInput, photoHint);
            noteField.append(photoLabel);

            if (answer.photo) {
              const preview = document.createElement("div");
              preview.className = "photo-preview";
              const image = document.createElement("img");
              image.src = answer.photo;
              image.alt = `Foto da não conformidade: ${label}`;
              const removePhoto = document.createElement("button");
              removePhoto.type = "button";
              removePhoto.className = "remove-photo";
              removePhoto.textContent = "Remover foto";
              removePhoto.disabled = locked;
              removePhoto.addEventListener("click", () => {
                delete draft.answers[id].photo;
                saveDraft();
                renderChecklist();
              });
              preview.append(image, removePhoto);
              noteField.append(preview);
            }
            row.append(noteField);
          }
          group.append(row);
        });
        container.append(group);
      });
      updateSummary();
    }

    function updateSummary() {
      const items = allItems();
      const total = items.length;
      const answers = items.map(({ id }) => draft.answers[id] || {});
      const responded = items.filter(({ id }) => itemIsComplete(id)).length;
      const failures = answers.filter((answer) => answer.status === "fail").length;
      const conforms = answers.filter((answer) => answer.status === "ok").length;
      const notApplicable = answers.filter((answer) => answer.status === "na").length;
      const aptitude = calculateAptitude();
      const percentage = total ? Math.round((responded / total) * 100) : 0;
      document.getElementById("progress-text").textContent = `${responded} de ${total}`;
      document.getElementById("progress-fill").style.width = `${percentage}%`;
      document.getElementById("progressbar").setAttribute("aria-valuenow", String(percentage));
      document.getElementById("summary-percent").textContent = `${percentage}%`;
      document.getElementById("summary-fill").style.width = `${percentage}%`;
      document.getElementById("summary-description").textContent = draft.vehicle.type ? vehicleName(draft.vehicle) : "Selecione um tipo para iniciar o checklist.";
      const completion = document.getElementById("completion-pill");
      completion.textContent = draft.finalizedAt ? "Finalizado" : (responded === total && total ? "Pronto para finalizar" : "Em andamento");
      completion.className = `pill${draft.finalizedAt ? " pill-good" : ""}`;

      const summary = document.getElementById("status-summary");
      summary.replaceChildren();
      [[`${conforms} conformes`, "pill-good"], [`${failures} não conformes`, failures ? "pill-bad" : ""], [`${notApplicable} não se aplicam`, ""]].forEach(([text, className]) => {
        const pill = document.createElement("span");
        pill.className = `pill ${className}`.trim();
        pill.textContent = text;
        summary.append(pill);
      });

      const aptitudeCard = document.getElementById("aptitude-card");
      const aptitudeStatus = document.getElementById("aptitude-status");
      const aptitudeDetail = document.getElementById("aptitude-detail");
      aptitudeCard.className = `aptitude-card ${aptitude.status}`;
      if (aptitude.status === "pending") {
        aptitudeStatus.textContent = "Pendente";
        aptitudeDetail.textContent = total
          ? `Confirme como “Conforme” todos os requisitos essenciais (${aptitude.missingCount} aguardando confirmação).`
          : "Selecione o tipo de veículo e conclua a inspeção para avaliar os requisitos essenciais.";
      } else if (aptitude.status === "unfit") {
        aptitudeStatus.textContent = "Não apto";
        aptitudeDetail.textContent = `Falha em ${aptitude.criticalFailures.length} requisito(s) essencial(is). Não opere e comunique o responsável.`;
      } else {
        aptitudeStatus.textContent = "Apto";
        if (aptitude.remainingCount) {
          aptitudeDetail.textContent = `Requisitos essenciais atendidos. Complete os ${aptitude.remainingCount} itens restantes antes de finalizar.`;
        } else if (failures) {
          aptitudeDetail.textContent = "Requisitos essenciais atendidos; há outras não conformidades registradas. Avalie-as antes da liberação.";
        } else {
          aptitudeDetail.textContent = "Todos os itens foram verificados e os requisitos essenciais para operação foram atendidos.";
        }
      }

      const result = document.getElementById("result-banner");
      if (aptitude.status === "unfit") {
        result.textContent = `${draft.finalizedAt ? "Inspeção finalizada" : "Inspeção em andamento"}: falha em requisito essencial. Veículo não apto para operação.`;
        result.className = "result-banner bad";
      } else if (draft.finalizedAt) {
        result.textContent = failures ? `Inspeção finalizada com ${failures} não conformidade(s). Avalie os riscos antes de liberar o equipamento.` : "Inspeção finalizada. Confirme as condições de uso antes de iniciar a operação.";
        result.className = `result-banner ${failures ? "bad" : "good"}`;
      } else if (failures) {
        result.textContent = `${failures} não conformidade(s) identificada(s). O status de aptidão só será calculado após responder todos os itens.`;
        result.className = "result-banner bad";
      } else {
        result.textContent = total && responded === total
          ? "Todos os requisitos essenciais foram atendidos. Siga os procedimentos de segurança da operação."
          : "O status de aptidão será calculado após todos os itens serem verificados.";
        result.className = "result-banner";
      }
      const unresolvedItems = items.some(({ id }) => {
        const answer = draft.answers[id];
        return !answer?.status || (answer.status === "fail" && !answer.note?.trim());
      });
      document.getElementById("finish-checklist").disabled = !total || unresolvedItems || Boolean(draft.finalizedAt);
      document.getElementById("finish-checklist").textContent = draft.finalizedAt ? "Inspeção finalizada" : "Finalizar inspeção";
      document.querySelectorAll("#vehicle-type, #operator, [data-vehicle-field]").forEach((input) => {
        input.disabled = isDraftLocked();
      });
      document.getElementById("general-comment").disabled = isDraftLocked();
    }

    function openHistoryRecordForEditing(record) {
      const finalizedTime = Date.parse(record.finalizedAt);
      if (!Number.isFinite(finalizedTime) || Date.now() - finalizedTime < EDIT_LOCK_MS) {
        showNotice("Este checklist ainda está dentro do período de bloqueio de cinco minutos.");
        return;
      }
      const hasCurrentDraft = !draft.finalizedAt && (draft.vehicle.type || draft.operator.trim() || Object.keys(draft.answers).length);
      if (draft.id !== record.id && hasCurrentDraft && !window.confirm("Abrir este registro substituirá o rascunho atual. Deseja continuar?")) return;
      const latestRecord = history.find((item) => item.id === record.id);
      if (!latestRecord) return;
      draft = JSON.parse(JSON.stringify(latestRecord));
      reviewSectionIndex = null;
      saveDraft();
      updateInputsFromDraft();
      historyDialog.close();
      showNotice("Checklist aberto para edição. As alterações serão salvas no próprio registro do histórico.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function deleteHistoryRecord(record) {
      if (!window.confirm("Excluir este checklist finalizado do histórico? Esta ação não pode ser desfeita.")) return;
      const nextHistory = history.filter((item) => item.id !== record.id);
      if (!save(HISTORY_KEY, nextHistory)) return;
      history = nextHistory;
      if (draft.id === record.id) {
        draft = createDraft();
        reviewSectionIndex = null;
        saveDraft();
        updateInputsFromDraft();
      }
      renderHistory();
      showNotice("Checklist excluído.");
    }

    function historyVehicleKey(record) {
      const vehicle = record.vehicle || {};
      const identifier = vehicle.plate || vehicle.fleetNumber || vehicle.serialNumber || vehicle.makeModel || "Sem identificação";
      return `${vehicle.type || "unknown"}|${normalize(identifier)}`;
    }

    function populateHistoryFilters() {
      const vehicleSelect = document.getElementById("history-filter-vehicle");
      const itemSelect = document.getElementById("history-filter-item");
      const vehicleValue = vehicleSelect.value;
      const groupValue = itemSelect.value;
      const statusValue = document.getElementById("history-filter-status").value;
      const startValue = document.getElementById("history-filter-start").value;
      const endValue = document.getElementById("history-filter-end").value;
      const vehicleOptions = new Map();
      history.forEach((record) => vehicleOptions.set(historyVehicleKey(record), vehicleName(record.vehicle || {})));
      vehicleSelect.replaceChildren(new Option("Todos os veículos", ""));
      [...vehicleOptions.entries()].sort((a, b) => a[1].localeCompare(b[1], "pt-BR")).forEach(([value, label]) => vehicleSelect.add(new Option(label, value)));
      vehicleSelect.value = vehicleOptions.has(vehicleValue) ? vehicleValue : "";

      const inspectionGroups = new Map();
      ["car", "truck", "machine"].forEach((type) => {
        sectionsForType(type).forEach((section) => {
          if (!inspectionGroups.has(section.title)) inspectionGroups.set(section.title, true);
        });
      });
      itemSelect.replaceChildren(new Option("Todos os grupos", ""));
      [...inspectionGroups.keys()].sort((a, b) => a.localeCompare(b, "pt-BR")).forEach((title) => itemSelect.add(new Option(title, title)));
      itemSelect.value = inspectionGroups.has(groupValue) ? groupValue : "";
      document.getElementById("history-filter-status").value = statusValue;
      return { vehicle: vehicleSelect.value, item: itemSelect.value, status: statusValue, start: startValue, end: endValue };
    }

    function recordMatchesHistoryFilters(record, filters) {
      if (filters.vehicle && historyVehicleKey(record) !== filters.vehicle) return false;
      const inspectionTime = Date.parse(record.openedAt);
      if (filters.start && inspectionTime < new Date(filters.start).getTime()) return false;
      if (filters.end && inspectionTime > new Date(filters.end).getTime()) return false;
      if (filters.item) {
        const section = sectionsForType(record.vehicle?.type).find((candidate) => candidate.title === filters.item);
        if (!section) return false;
        const answersInGroup = section.items.map(([id]) => record.answers?.[id]);
        if (filters.status
          ? !answersInGroup.some((answer) => answer?.status === filters.status)
          : !answersInGroup.some((answer) => answer?.status)) return false;
      } else if (filters.status && !Object.values(record.answers || {}).some((answer) => answer.status === filters.status)) {
        return false;
      }
      return true;
    }

    function renderHistory() {
      if (window.historyUnlockTimer) window.clearTimeout(window.historyUnlockTimer);
      const container = document.getElementById("history-list");
      container.replaceChildren();
      document.getElementById("history-count").textContent = String(history.length);
      const dialogContainer = document.getElementById("history-dialog-list");
      dialogContainer.replaceChildren();
      const filters = populateHistoryFilters();
      const filteredHistory = history.filter((record) => recordMatchesHistoryFilters(record, filters));
      document.getElementById("history-filter-summary").textContent = `${filteredHistory.length} ${filteredHistory.length === 1 ? "inspeção" : "inspeções"} no relatório`;
      if (!history.length) {
        const empty = document.createElement("p");
        empty.className = "history-empty";
        empty.textContent = "Nenhuma inspeção finalizada ainda.";
        container.append(empty);
        const dialogEmpty = document.createElement("p");
        dialogEmpty.className = "history-empty-large";
        dialogEmpty.textContent = "Ainda não há checklists realizados. As inspeções aparecerão aqui após serem finalizadas.";
        dialogContainer.append(dialogEmpty);
        return;
      }

      history.slice(0, 5).forEach((record) => {
        const entry = document.createElement("div");
        entry.className = "history-entry";
        const title = document.createElement("strong");
        title.textContent = vehicleName(record.vehicle);
        const detail = document.createElement("span");
        const issues = Object.values(record.answers || {}).filter((answer) => answer.status === "fail").length;
        const aptitudeLabel = record.aptitude === "fit" ? "Apto" : record.aptitude === "unfit" ? "Não apto" : "Pendente";
        detail.textContent = `${record.operator || "Operador não informado"} · ${formatDate(record.openedAt)} · ${aptitudeLabel} · ${issues} não conformidade(s)`;
        entry.append(title, detail);
        container.append(entry);
      });

      filteredHistory.forEach((record) => {
        const recordItems = itemsForType(record.vehicle?.type);
        const failedCount = recordItems.filter(({ id }) => record.answers?.[id]?.status === "fail").length;
        const criticalFailure = recordItems.some(({ id, essential }) => essential && record.answers?.[id]?.status === "fail");
        const essentialItems = recordItems.filter(({ essential }) => essential);
        const essentialsConfirmed = essentialItems.every(({ id }) => record.answers?.[id]?.status === "ok");
        const aptitude = record.aptitude || (criticalFailure ? "unfit" : essentialsConfirmed ? "fit" : "pending");
        const aptitudeLabel = aptitude === "fit" ? "Apto" : aptitude === "unfit" ? "Não apto" : "Pendente";

        const details = document.createElement("details");
        details.className = "history-record";
        const summary = document.createElement("summary");
        const titleWrap = document.createElement("span");
        titleWrap.className = "history-record-title";
        const title = document.createElement("strong");
        title.textContent = `${vehicleName(record.vehicle)} · ${record.id || "Inspeção"}`;
        const subtitle = document.createElement("span");
        subtitle.textContent = `${record.operator || "Operador não informado"} · ${formatDate(record.openedAt)}${record.editedAt ? ` · Editado em ${formatDate(record.editedAt)}` : ""}`;
        titleWrap.append(title, subtitle);
        const badge = document.createElement("span");
        badge.className = `pill${aptitude === "fit" ? " pill-good" : aptitude === "unfit" ? " pill-bad" : " pill-warn"}`;
        badge.textContent = aptitudeLabel;
        summary.append(titleWrap, badge);
        details.append(summary);

        const actions = document.createElement("div");
        actions.className = "history-record-actions";
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "button history-edit-button";
        const elapsed = Date.now() - Date.parse(record.finalizedAt);
        const editLocked = !Number.isFinite(elapsed) || elapsed < EDIT_LOCK_MS;
        editButton.textContent = editLocked ? "Editar após 5 min" : "Editar checklist";
        editButton.disabled = editLocked;
        editButton.title = editLocked ? "A edição será liberada cinco minutos após a finalização." : "Editar este checklist finalizado";
        editButton.addEventListener("click", () => openHistoryRecordForEditing(record));
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "button button-delete";
        deleteButton.textContent = "Excluir";
        deleteButton.addEventListener("click", () => deleteHistoryRecord(record));
        actions.append(editButton, deleteButton);
        details.append(actions);

        const content = document.createElement("div");
        content.className = "history-record-content";
        const metadata = document.createElement("div");
        metadata.className = "history-metadata";
        [
          ["Tipo", vehicleName(record.vehicle)],
          ["Operador", record.operator || "—"],
          ["Data e horário de início", formatDate(record.openedAt)],
          ["Data e horário de finalização", formatDate(record.finalizedAt)],
          ...(record.editedAt ? [["Data e horário da última edição", formatDate(record.editedAt)]] : []),
          ["Placa / registro", record.vehicle?.plate || "—"],
          ["Frota / patrimônio", record.vehicle?.fleetNumber || "—"],
          ["Série / chassi", record.vehicle?.serialNumber || "—"],
          ["Marca e modelo", record.vehicle?.makeModel || "—"],
          ["Cor", record.vehicle?.color || "—"],
          ["Quilometragem / horímetro", record.vehicle?.reading || "—"],
          ["Local", record.vehicle?.location || "—"],
          ["Resultado", `${aptitudeLabel} · ${failedCount} não conformidade(s)`]
        ].forEach(([label, value]) => {
          const cell = document.createElement("div");
          const key = document.createElement("span");
          key.textContent = label;
          const text = document.createElement("strong");
          text.textContent = value;
          cell.append(key, text);
          metadata.append(cell);
        });
        content.append(metadata);

        sectionsForType(record.vehicle?.type).filter((section) => !filters.item || section.title === filters.item).forEach((section) => {
          const answerGroup = document.createElement("section");
          answerGroup.className = "history-answer-group";
          const heading = document.createElement("h3");
          heading.textContent = section.title;
          answerGroup.append(heading);
          section.items.forEach(([id, label]) => {
            const answer = record.answers?.[id] || {};
            const item = document.createElement("div");
            item.className = "history-answer";
            const itemName = document.createElement("span");
            itemName.textContent = label;
            const status = document.createElement("span");
            status.className = `history-answer-status ${answer.status || ""}`;
            status.textContent = statusNames[answer.status] || "Sem resposta";
            item.append(itemName, status);
            if (answer.note) {
              const note = document.createElement("span");
              note.className = "history-answer-note";
              note.textContent = `Observação: ${answer.note}`;
              item.append(note);
            }
            if (answer.photo) {
              const photo = document.createElement("img");
              photo.className = "history-photo";
              photo.src = answer.photo;
              photo.alt = `Foto anexada: ${label}`;
              item.append(photo);
            }
            answerGroup.append(item);
          });
          content.append(answerGroup);
        });

        if (record.comment?.trim()) {
          const comment = document.createElement("div");
          comment.className = "history-comment";
          comment.textContent = `Comentário geral: ${record.comment}`;
          content.append(comment);
        }
        details.append(content);
        dialogContainer.append(details);
      });
      if (!filteredHistory.length) {
        const noMatches = document.createElement("p");
        noMatches.className = "history-empty-large";
        noMatches.textContent = "Nenhuma inspeção corresponde aos filtros selecionados.";
        dialogContainer.append(noMatches);
      }
      const remainingTimes = history.map((record) => {
        const elapsed = Date.now() - Date.parse(record.finalizedAt);
        return Number.isFinite(elapsed) ? EDIT_LOCK_MS - elapsed : Infinity;
      }).filter((remaining) => remaining > 0);
      if (remainingTimes.length) {
        window.historyUnlockTimer = window.setTimeout(() => {
          if (historyDialog.open) renderHistory();
        }, Math.min(...remainingTimes) + 50);
      }
    }

    function updateInputsFromDraft() {
      setInputValues();
      renderChecklist();
      renderRegistries();
    }

    function hasInspectionProgress() {
      return Object.keys(draft.answers).length > 0 || Boolean(draft.comment?.trim());
    }

    function confirmVehicleChange() {
      return !hasInspectionProgress() || window.confirm("Trocar o veículo apagará as respostas e o comentário deste checklist. Deseja continuar?");
    }

    function clearInspectionProgress() {
      draft.answers = {};
      draft.comment = "";
      document.getElementById("general-comment").value = "";
    }

    document.getElementById("saved-vehicle").addEventListener("change", (event) => {
      if (isDraftLocked()) return;
      const selectedId = event.target.value;
      if (selectedId === "__new__") {
        if (currentRole !== "manager") {
          event.target.value = "";
          showNotice("Somente usuários de gerência podem cadastrar veículos. Solicite o cadastro à gerência.");
          return;
        }
        if (!confirmVehicleChange()) {
          const currentVehicle = findSavedVehicle(draft.vehicle);
          event.target.value = currentVehicle?.id || "";
          return;
        }
        draft.vehicle = { type: "", plate: "", fleetNumber: "", serialNumber: "", makeModel: "", color: "", reading: "", location: "" };
        clearInspectionProgress();
        reviewSectionIndex = null;
        saveDraft();
        setInputValues();
        renderChecklist();
        event.target.value = "__new__";
        document.getElementById("vehicle-type").focus();
        showNotice("Para incluir este veículo no cadastro, abra “Gerenciar cadastro” ou use “Gerenciar veículos” no topo.");
        return;
      }

      const selectedVehicle = vehicles.find((vehicle) => vehicle.id === selectedId);
      if (!selectedVehicle) return;
      const currentVehicle = findSavedVehicle(draft.vehicle);
      if (currentVehicle?.id !== selectedVehicle.id && !confirmVehicleChange()) {
        event.target.value = currentVehicle?.id || "";
        return;
      }
      draft.vehicle = { ...selectedVehicle.details, type: selectedVehicle.type };
      if (currentVehicle?.id !== selectedVehicle.id) {
        clearInspectionProgress();
        reviewSectionIndex = null;
      }
      saveDraft();
      setInputValues();
      renderChecklist();
      renderRegistries();
      showNotice(`Dados de “${vehicleName(draft.vehicle)}” preenchidos.`);
    });

    document.getElementById("saved-operator").addEventListener("change", (event) => {
      if (isDraftLocked()) return;
      if (event.target.value === "__new__") {
        draft.operator = "";
        document.getElementById("operator").value = "";
        saveDraft();
        document.getElementById("operator").focus();
        showNotice("Digite o nome do novo operador e selecione “Salvar operador” para cadastrá-lo.");
        return;
      }
      const selectedOperator = operators.find((operator) => operator.id === event.target.value);
      if (!selectedOperator) return;
      draft.operator = selectedOperator.name;
      document.getElementById("operator").value = selectedOperator.name;
      saveDraft();
      showNotice(`Operador “${selectedOperator.name}” selecionado.`);
    });

    document.getElementById("save-vehicle").addEventListener("click", () => {
      if (currentRole !== "manager") {
        showNotice("Somente usuários de gerência podem alterar o cadastro de veículos.");
        return;
      }
      openVehicleManagement();
    });

    document.getElementById("save-operator").addEventListener("click", () => {
      if (isDraftLocked()) return;
      const name = draft.operator.trim();
      if (!name) {
        showNotice("Informe o nome do operador antes de salvá-lo no cadastro.");
        document.getElementById("operator").focus();
        return;
      }
      const existing = operators.find((operator) => normalize(operator.name) === normalize(name));
      const savedOperator = { id: existing?.id || newId(), name };
      const nextOperators = existing
        ? operators.map((operator) => operator.id === existing.id ? savedOperator : operator)
        : [...operators, savedOperator];
      if (!saveRegistry(OPERATORS_KEY, nextOperators)) return;
      operators = nextOperators;
      renderRegistries();
      document.getElementById("saved-operator").value = savedOperator.id;
      showNotice(existing ? "Cadastro do operador atualizado." : "Operador cadastrado para as próximas inspeções.");
    });

    document.getElementById("vehicle-type").addEventListener("change", (event) => {
      if (isDraftLocked()) return;
      const previousType = draft.vehicle.type;
      draft.vehicle.type = event.target.value;
      if (previousType && previousType !== draft.vehicle.type) {
        reviewSectionIndex = null;
        const validIds = new Set(allItems().map(({ id }) => id));
        Object.keys(draft.answers).forEach((id) => {
          if (!validIds.has(id)) delete draft.answers[id];
        });
      }
      document.getElementById("reading-label").textContent = draft.vehicle.type === "machine" ? "Horímetro" : "Quilometragem / horímetro";
      document.getElementById("reading").placeholder = draft.vehicle.type === "machine" ? "Horas de operação" : "Leitura atual";
      saveDraft();
      renderChecklist();
      renderRegistries();
      document.getElementById("saved-vehicle").value = findSavedVehicle(draft.vehicle)?.id || (vehicleIdentity(draft.vehicle) ? "__new__" : "");
    });

    document.getElementById("operator").addEventListener("input", (event) => {
      if (isDraftLocked()) return;
      draft.operator = event.target.value;
      saveDraft();
      document.getElementById("saved-operator").value = operators.find((operator) => normalize(operator.name) === normalize(draft.operator))?.id || (draft.operator.trim() ? "__new__" : "");
    });

    document.getElementById("general-comment").addEventListener("input", (event) => {
      if (isDraftLocked()) return;
      draft.comment = event.target.value;
      saveDraft();
    });

    document.querySelectorAll("[data-vehicle-field]").forEach((input) => {
      input.addEventListener("input", () => {
        if (isDraftLocked()) return;
        draft.vehicle[input.dataset.vehicleField] = input.value;
        saveDraft();
        const savedVehicle = findSavedVehicle(draft.vehicle);
        document.getElementById("saved-vehicle").value = savedVehicle?.id || (vehicleIdentity(draft.vehicle) ? "__new__" : "");
        document.getElementById("summary-description").textContent = draft.vehicle.type ? vehicleName(draft.vehicle) : "Selecione um tipo para iniciar o checklist.";
      });
    });

    document.getElementById("finish-checklist").addEventListener("click", async () => {
      const problems = [];
      if (!draft.vehicle.type) problems.push("Selecione o tipo do veículo ou equipamento.");
      if (!draft.operator.trim()) problems.push("Informe o nome do operador.");
      if (draft.vehicle.type === "machine" && !draft.vehicle.fleetNumber.trim() && !draft.vehicle.serialNumber.trim()) {
        problems.push("Informe o número de frota/patrimônio ou o número de série da máquina.");
      }
      if ((draft.vehicle.type === "car" || draft.vehicle.type === "truck") && !draft.vehicle.plate.trim()) {
        problems.push("Informe a placa do veículo.");
      }
      const missing = allItems().filter(({ id }) => !draft.answers[id]?.status);
      if (missing.length) problems.push(`${missing.length} item(ns) sem resposta; todos os itens devem ser verificados ou marcados como N/A.`);
      const notesMissing = allItems().filter(({ id }) => draft.answers[id]?.status === "fail" && !draft.answers[id]?.note?.trim());
      if (notesMissing.length) problems.push(`${notesMissing.length} não conformidade(s) sem observação.`);
      if (problems.length) {
        showNotice(`Não foi possível finalizar: ${problems.join(" ")}`);
        if (!draft.vehicle.type) document.getElementById("vehicle-type").focus();
        else if (!draft.operator.trim()) document.getElementById("operator").focus();
        else if (missing.length) document.querySelector(".status-button[aria-pressed='false']")?.focus();
        else document.querySelector(".observation textarea")?.focus();
        return;
      }

      draft.aptitude = calculateAptitude().status;
      draft.finalizedAt = new Date().toISOString();
      const record = JSON.parse(JSON.stringify(draft));
      history.unshift(record);
      history = history.slice(0, 100);
      const historySaved = save(HISTORY_KEY, history);
      const finalizedDraftSaved = saveDraft();
      let cloudSyncError = null;
      if (supabaseClient && authUser) {
        try {
          await syncCurrentInspection();
        } catch (error) {
          cloudSyncError = error;
        }
      }

      draft = createDraft();
      reviewSectionIndex = null;
      const clearedDraftSaved = saveDraft();
      updateInputsFromDraft();
      renderHistory();
      scheduleEditUnlock();
      const locallySaved = historySaved && finalizedDraftSaved && clearedDraftSaved;
      const completionMessage = locallySaved
        ? "Inspeção finalizada e salva. O formulário foi limpo para iniciar o próximo checklist."
        : "Inspeção finalizada, mas houve uma falha ao salvar localmente. Confira a conexão e o estado de salvamento.";
      showNotice(cloudSyncError
        ? `${completionMessage} A sincronização com o Supabase falhou: ${cloudSyncError.message}`
        : completionMessage);
    });

    document.getElementById("new-checklist").addEventListener("click", () => {
      const hasAnswers = Object.keys(draft.answers).length > 0 || draft.operator.trim() || draft.vehicle.type;
      if (!draft.finalizedAt && hasAnswers && !window.confirm("Este checklist ainda não foi finalizado. Iniciar outro descartará o rascunho atual. Deseja continuar?")) return;
      draft = createDraft();
      reviewSectionIndex = null;
      saveDraft();
      scheduleEditUnlock();
      notice.hidden = true;
      document.getElementById("saved-vehicle").value = "";
      document.getElementById("saved-operator").value = "";
      updateInputsFromDraft();
    });

    document.getElementById("delete-current-checklist").addEventListener("click", () => {
      const record = history.find((item) => item.id === draft.id) || draft;
      deleteHistoryRecord(record);
      scheduleEditUnlock();
    });

    document.getElementById("print-report").addEventListener("click", () => window.print());
    document.getElementById("continue-checklist").addEventListener("click", () => {
      reviewSectionIndex = null;
      renderChecklist();
      document.getElementById("inspection-heading").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const historyDialog = document.getElementById("history-dialog");
    document.getElementById("history-button").addEventListener("click", () => {
      renderHistory();
      historyDialog.showModal();
    });
    document.getElementById("close-history").addEventListener("click", () => historyDialog.close());
    ["history-filter-vehicle", "history-filter-item", "history-filter-status", "history-filter-start", "history-filter-end"].forEach((id) => {
      document.getElementById(id).addEventListener("change", renderHistory);
    });
    document.getElementById("clear-history-filters").addEventListener("click", () => {
      document.getElementById("history-filter-vehicle").value = "";
      document.getElementById("history-filter-item").value = "";
      document.getElementById("history-filter-status").value = "";
      document.getElementById("history-filter-start").value = "";
      document.getElementById("history-filter-end").value = "";
      renderHistory();
    });
    document.getElementById("print-history-report").addEventListener("click", () => {
      if (!historyDialog.open) historyDialog.showModal();
      document.body.classList.add("history-print-mode");
      window.print();
    });
    window.addEventListener("afterprint", () => document.body.classList.remove("history-print-mode"));

    const vehicleManagementDialog = document.getElementById("vehicle-management-dialog");
    function openVehicleManagement() {
      if (currentRole !== "manager") {
        showNotice("A gestão de veículos está disponível somente para usuários de gerência.");
        return;
      }
      renderManagedVehicles();
      managedVehicleForm.hidden = true;
      vehicleManagementDialog.showModal();
    }
    document.getElementById("manage-vehicles-button").addEventListener("click", openVehicleManagement);
    document.getElementById("close-vehicle-management").addEventListener("click", () => vehicleManagementDialog.close());
    document.getElementById("new-managed-vehicle").addEventListener("click", () => showManagedVehicleForm());
    document.getElementById("cancel-managed-vehicle").addEventListener("click", () => {
      managedVehicleForm.reset();
      managedVehicleForm.hidden = true;
      editingVehicleId = null;
    });
    managedVehicleForm.addEventListener("submit", saveManagedVehicle);

    document.getElementById("login-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("login-user").value.trim();
      const password = document.getElementById("login-password").value;
      const errorElement = document.getElementById("login-error");
      errorElement.hidden = true;
      if (!supabaseClient) {
        errorElement.textContent = "Configure a URL e a chave publishable em supabase/config.js para conectar ao projeto Supabase.";
        errorElement.hidden = false;
        return;
      }
      try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email: username, password });
        if (error) throw error;
        authUser = data.user;
        const { data: profile, error: profileError } = await supabaseClient.from("perfis").select("nome_exibicao,perfil,ativo").eq("id", authUser.id).single();
        if (profileError) throw profileError;
        if (!profile.ativo) throw new Error("Este usuário está inativo. Procure a gerência.");
        currentRole = profile.perfil === "gerencia" ? "manager" : "collaborator";
        document.getElementById("logged-user").textContent = profile.nome_exibicao || username;
        document.getElementById("logged-role").textContent = profile.perfil;
        document.getElementById("manage-vehicles-button").hidden = currentRole !== "manager";
        document.getElementById("login-screen").hidden = true;
        document.getElementById("app-shell").hidden = false;
        const vehicleQuery = supabaseClient.from("veiculos").select("*");
        if (currentRole !== "manager") vehicleQuery.eq("ativo", true);
        const { data: rows, error: vehiclesError } = await vehicleQuery;
        if (vehiclesError) throw vehiclesError;
        vehicles = rows.map((row) => ({ id: row.id, type: ({ carro: "car", caminhao: "truck", maquina: "machine" })[row.tipo], active: row.ativo, details: { plate: row.placa || "", fleetNumber: row.numero_frota || "", serialNumber: row.numero_serie || "", makeModel: row.marca_modelo || "", color: row.cor || "" } }));
        const { data: operatorRows, error: operatorsError } = await supabaseClient.from("operadores").select("id,nome,ativo").eq("ativo", true);
        if (operatorsError) throw operatorsError;
        operators = operatorRows.map((row) => ({ id: row.id, name: row.nome }));
        const { data: inspections, error: inspectionsError } = await supabaseClient.from("inspecoes").select("*,itens_inspecao(*)").order("aberto_em", { ascending: false }).limit(100);
        if (inspectionsError) throw inspectionsError;
        history = inspections.filter((row) => row.situacao === "concluida").map(inspectionFromRow);
        const ownDraft = inspections.find((row) => row.operador_usuario_id === authUser.id && row.situacao === "rascunho");
        if (ownDraft) draft = inspectionFromRow(ownDraft);
        saveRegistry(VEHICLES_KEY, vehicles); saveRegistry(OPERATORS_KEY, operators); save(HISTORY_KEY, history); save(DRAFT_KEY, draft);
        renderRegistries(); renderHistory(); updateInputsFromDraft();
        document.getElementById("login-password").value = "";
        if (!draft.finalizedAt && !draft.operator.trim()) { draft.operator = profile.nome_exibicao || username; setInputValues(); saveDraft(); }
      } catch (error) {
        errorElement.textContent = `Não foi possível entrar: ${error.message}`;
        errorElement.hidden = false;
      }
    });

    document.getElementById("logout-button").addEventListener("click", () => {
      if (supabaseClient) supabaseClient.auth.signOut();
      authUser = null;
      document.getElementById("app-shell").hidden = true;
      document.getElementById("login-screen").hidden = false;
      document.getElementById("login-password").value = "";
      document.getElementById("login-error").hidden = true;
      document.getElementById("login-user").focus();
    });

    const passwordDialog = document.getElementById("password-dialog");
    function openPasswordDialog() {
      document.getElementById("password-error").hidden = true;
      document.getElementById("password-description").textContent = "A senha atual é necessária para confirmar a alteração.";
      document.getElementById("current-password").value = "";
      passwordDialog.showModal();
      document.getElementById("current-password").focus();
    }
    document.getElementById("change-password-button").addEventListener("click", openPasswordDialog);
    document.getElementById("login-change-password").addEventListener("click", openPasswordDialog);

    const registrationDialog = document.getElementById("registration-dialog");
    document.getElementById("first-access-button").addEventListener("click", () => {
      const errorElement = document.getElementById("registration-error");
      errorElement.hidden = true;
      if (!supabaseClient) { errorElement.textContent = "Configure a conexão com Supabase em supabase/config.js."; errorElement.hidden = false; registrationDialog.showModal(); return; }
      registrationDialog.showModal();
      document.getElementById("registration-user").focus();
    });
    document.getElementById("cancel-registration").addEventListener("click", () => registrationDialog.close());
    document.getElementById("registration-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("registration-user").value.trim();
      const email = document.getElementById("registration-email").value.trim();
      const password = document.getElementById("registration-password").value;
      const confirmation = document.getElementById("registration-confirm").value;
      const errorElement = document.getElementById("registration-error");
      errorElement.hidden = true;
      if (password.length < 6) {
        errorElement.textContent = "A senha precisa ter pelo menos 6 caracteres.";
        errorElement.hidden = false;
        return;
      }
      if (password !== confirmation) {
        errorElement.textContent = "A confirmação não corresponde à senha.";
        errorElement.hidden = false;
        return;
      }
      try {
        if (!supabaseClient) throw new Error("Configure a URL e a chave Supabase em supabase/config.js.");
        const { error } = await supabaseClient.auth.signUp({ email, password, options: { data: { nome_exibicao: username } } });
        if (error) throw error;
        document.getElementById("login-user").value = email;
        document.getElementById("login-password").value = "";
        document.getElementById("registration-form").reset();
        registrationDialog.close();
        document.getElementById("login-password").focus();
        document.getElementById("login-error").textContent = "Cadastro enviado. Confirme o e-mail, se solicitado, e entre com sua senha. O novo perfil começa como colaborador; a gerência deve atribuir outros perfis pelo processo administrativo.";
        document.getElementById("login-error").hidden = false;
      } catch (error) {
        errorElement.textContent = `Não foi possível concluir o cadastro: ${error.message}`;
        errorElement.hidden = false;
      }
    });
    document.getElementById("cancel-password").addEventListener("click", () => passwordDialog.close());
    document.getElementById("change-password-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const current = document.getElementById("current-password").value;
      const next = document.getElementById("new-password").value;
      const confirmation = document.getElementById("confirm-password").value;
      const errorElement = document.getElementById("password-error");
      errorElement.hidden = true;
      if (next.length < 6) {
        errorElement.textContent = "A nova senha precisa ter pelo menos 6 caracteres.";
        errorElement.hidden = false;
        return;
      }
      if (next !== confirmation) {
        errorElement.textContent = "A confirmação não corresponde à nova senha.";
        errorElement.hidden = false;
        return;
      }
      try {
        if (!supabaseClient) throw new Error("Supabase não está configurado.");
        const email = document.getElementById("login-user").value.trim();
        const { error: signInError } = await supabaseClient.auth.signInWithPassword({ email, password: current });
        if (signInError) throw new Error("A senha atual está incorreta.");
        const { error } = await supabaseClient.auth.updateUser({ password: next });
        if (error) throw error;
        document.getElementById("change-password-form").reset();
        passwordDialog.close();
        document.getElementById("login-error").textContent = "Senha alterada com sucesso. Use a nova senha no próximo acesso.";
        document.getElementById("login-error").hidden = false;
        if (!document.getElementById("app-shell").hidden) showNotice("Senha alterada com sucesso.");
      } catch (error) {
        errorElement.textContent = `Não foi possível alterar a senha: ${error.message}`;
        errorElement.hidden = false;
      }
    });

    setInputValues();
    renderChecklist();
    renderHistory();
    renderRegistries();
    scheduleEditUnlock();
})();
