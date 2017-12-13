package com.artwell.inspectionrecord.service;

import com.artwell.inspectionrecord.entity.*;
import com.haulmont.cuba.core.EntityManager;
import com.haulmont.cuba.core.Persistence;
import com.haulmont.cuba.core.Transaction;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.persistence.NoResultException;
import java.util.UUID;

@Service(EmployeeService.NAME)
public class EmployeeServiceBean implements EmployeeService {
    @Inject
    private Persistence persistence;

    @Override
    public LoginInfo getLoginInfobyCode(String code) {
        Employee employee = null;
        HtEmpl htEmpl = null;
        Job job = null;
        HtJob htJob = null;
        System.out.println("code:"+code);
        try (Transaction tx = persistence.createTransaction("legacy")) {
            EntityManager em = persistence.getEntityManager("legacy");
            htEmpl = (HtEmpl) em.createQuery("select h from inspectionrecord$HtEmpl h where h.xNo = :code")
                    .setParameter("code", code)
                    .getSingleResult();
            tx.commit();
        } catch(NoResultException e) {
            return null;
        }
        try (Transaction tx = persistence.createTransaction()) {
            EntityManager em = persistence.getEntityManager();
            employee = (Employee) em.createQuery("select o from inspectionrecord$Employee o where o.htEmplId = :htEmplId")
                    .setParameter("htEmplId", htEmpl.getId())
                    .getSingleResult();
            tx.commit();
        } catch(NoResultException e) {
            return null;
        }

        try (Transaction tx = persistence.createTransaction("legacy")) {
            EntityManager em = persistence.getEntityManager("legacy");
            htJob = (HtJob) em.createQuery("select h from inspectionrecord$HtJob h where h.id = :htJobId")
                    .setParameter("htJobId", htEmpl.getRJob())
                    .getSingleResult();
            tx.commit();
        } catch(NoResultException e) {
            return null;
        }
        try (Transaction tx = persistence.createTransaction()) {
            EntityManager em = persistence.getEntityManager();
            job = (Job) em.createQuery("select distinct o from inspectionrecord$Job o JOIN FETCH o.defectTypeList where o.htJobId = :htJobId")
                    .setParameter("htJobId", htEmpl.getRJob())
                    .getSingleResult();
            tx.commit();
        } catch(NoResultException e) {
            return null;
        }
        return new LoginInfo(htEmpl.getXName(), employee.getId(), employee.getHtEmplId(), htJob.getXName(), job.getId(), job.getHtJobId(), job.getDefectTypeList());
    }
}